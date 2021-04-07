import React, { Component } from "react"
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native"
import { Picker } from "@react-native-picker/picker"

import { StatusBar } from "expo-status-bar";

import Header from "./src/components/Header"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: "",
      periodo: "",
      turno: "",
      curso: "",
      cursos: [
        { key: 1, nome: "Ciência da Computação", valor: 1600, periodo: 10 },
        { key: 2, nome: "Sistemas de Informação", valor: 1080, periodo: 8 },
        { key: 3, nome: "Nutrição", valor: 600, periodo: 4 },
        { Key: 4, nome: "Medicina", valor: 2000, periodo: 12 },
        { Key: 5, nome: "Adminstração", valor: 800, periodo: 8 }
      ],
      turnos: [
        { key: 1, turno: "Noturno" },
        { key: 2, turno: "Diurno" },
        { key: 3, turno: "Integral" }
      ]
    }
  }
  render() {
    let QtdPeriodos = []
    let setPeriodo = this.state.curso ? this.state.curso : ""
    for (let i = 0; i < this.state.cursos.length; i++) {
      if (this.state.cursos[i]) {
        for (let p = 0; p < this.state.cursos[i].periodo; p++) {
          if (this.state.cursos[i].nome == setPeriodo) {
            QtdPeriodos.push({ periodo: p + 1});
          }
        }
      }
    }

    let curso = this.state.cursos.map((value, key) => {
      return <Picker.Item key={key} value={value.nome} label={value.nome} />
    })

    let periodo = QtdPeriodos.map((value, key) => {
      return <Picker.Item key={key} value={value.periodo} label={value.periodo.toString()} />
    })
    
    let turno = this.state.turnos.map((value, key) => {
      return <Picker.Item key={key} value={value.turno} label={value.turno} />
    })

    return (
      <SafeAreaView style={style.container}>
        <StatusBar style="light" />
        <Header />
        <View style={style.body}>
          <View style={style.form}>
            <Text style={style.text}>Selecione os parâmentros:</Text>
            <View>
              <TextInput
                style={style.input}
                placeholder={"Digite seu nome"}
                onChangeText={(nome) => this.setState({ nome: nome })}/>
              <View style={style.picker}>
                <Picker
                style={{height: 50, width: 320}}
                  onValueChange={(curso) => this.setState({ curso: curso })}>
                  <Picker.Item value={""} label={"Curso"} />
                  {curso}
                </Picker>
              </View>
              <View style={style.picker}>
                <Picker
                  style={{height: 50, width: 320}}
                  onValueChange={(periodo) => this.setState({ periodo: periodo })}>
                  <Picker.Item value={""} label={"Período"} />
                  {periodo}
                </Picker>
              </View>
              <View style={style.picker}>
                <Picker
                  style={{height: 50, width: 320}}
                  onValueChange={(setTurno) => this.setState({ turno: setTurno })}>
                  <Picker.Item value={""} label={"Turno"} />
                  {turno}
                </Picker>
              </View>
            </View>
          </View>
            <Text style={style.title}>Informações inseridas:</Text>
              <View style={style.fieldValue}>
                <Text style={style.field}>Nome:</Text>
                <Text style={style.value}>{this.state.nome}</Text>
              </View>
              <View style={style.fieldValue}>
                <Text style={style.field}>Curso:</Text>
                <Text style={style.value}>{this.state.curso}</Text>
              </View>
              <View style={style.fieldValue}>
                <View style={style.row}>
                  <Text style={style.field}>Período:</Text>
                  <Text style={style.value}>{this.state.periodo}</Text>
                </View>
                <View style={style.row}>
                  <Text style={style.field}>Turno:</Text>
                  <Text style={style.value}>{this.state.turno}</Text>
                </View>
              </View>
              </View>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    margin: "5%",
  },
  input: {
    padding: "1%",
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    marginBottom: "5%",
    fontSize: 20,
    },
  picker: {
    borderColor: "black",
    borderWidth: 1,
    marginTop: "3%",
  },
  title: {
    fontSize: 20,
    marginTop: "5%",
    marginBottom: "5%",
  },
  fieldValue: {
    flexDirection: "row",
    marginBottom: "2%",
  },
  field: {
    marginRight: "6%",
    fontWeight: "bold",
  },
  fieldValues: {
    marginLeft: 20
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
})

export default App;
