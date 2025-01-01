import logotipo  from './Clasco.png'
import { Page, Text, View, Document, StyleSheet,Image, PDFViewer } from '@react-pdf/renderer';

import axios from 'axios';

// Estilos para o documento
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#fff',
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center", 
    gap: 30,
    marginBottom: 10
  },
  logo: {
    width: 250,
  },
  textHeader: {
    display: "flex",
    flexDirection: "column",
    fontSize: 11
  },
  sectionTitle: {
    fontSize: 15,
    marginBottom: 8,
    color: '#000',
    borderBottom: '1 solid #000',
    paddingBottom: 5,
    marginTop: 15,
    lineHeight: 0.8
  },
  section: {
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    color: '#111',

  },
  signatureSection: {
    marginTop: 30,
    // borderTop: '1 solid #333',
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 12,
  },
  signatureText: { 
    marginBottom: 15
  },
  signature: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
});

const PreTicket = () => {


  return (
    <Document>
    <Page size="A4" style={styles.page}>
      {/* Título principal */}
      <View style={styles.header}>
        <Image src={logotipo} style={styles.logo}/> 
        {/* <Text style={styles.header}>Documento de Abertura de Chamado</Text> */}
        <View style={styles.textHeader}>
          <Text>Sede: Bairro Bela Vista Baixa, Casa s/nº </Text>
          <Text>Benguela, Angola, Benguela </Text>
          <Text>Email:clascoprestacaodeservico@gmail.com</Text>
          <Text>Tel. Nº 926954450/950802641</Text>
          <Text>NIF: 5002033763</Text>
        </View>
      </View>

      {/* Informações Gerais */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detalhes do Chamado</Text>
        <Text style={styles.text}>Número do Chamado: </Text>
        <Text style={styles.text}>Data de Abertura: </Text>
        <Text style={styles.text}>Horário de Abertura: </Text>
        <Text style={styles.text}>Prioridade: </Text>
        <Text style={styles.text}>Status: </Text>
      </View>

      {/* Informações do Solicitante */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações do Solicitante</Text>
        <Text style={styles.text}>Nome do Solicitante: </Text>
        <Text style={styles.text}>Cargo: </Text>
        <Text style={styles.text}>Departamento: </Text>
        <Text style={styles.text}>Telefone: </Text>
      </View>

      {/* Detalhes do Problema */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detalhes do Chamado</Text>
        <Text style={styles.text}>Tipo de Problema: </Text>
        <Text style={styles.text}>Descrição do Problema: </Text>
        <Text style={styles.text}>Data/Horário do Problema: </Text>
        <Text style={styles.text}>Equipamento Envolvido: </Text>
      </View>

      {/* Atendimento Técnico */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Atendimento Técnico</Text>
        <Text style={styles.text}>Técnico Responsável: </Text>
        <Text style={styles.text}>Data de Atendimento: </Text>
        <Text style={styles.text}>Horário de Atendimento: </Text>
        <Text style={styles.text}>Solução Aplicada: </Text>
      </View>

      {/* Encerramento do Chamado */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Encerramento do Chamado</Text>
        <Text style={styles.text}>Data de Encerramento: </Text>
        <Text style={styles.text}>Horário de Encerramento: </Text>
        <Text style={styles.text}>Status Final: </Text>
        <Text style={styles.text}>Técnico Responsável pelo Encerramento: </Text>
      </View>

      {/* Assinaturas */}
      <View style={styles.signature}>
      <View style={styles.signatureSection}>
        <Text style={styles.signatureText}>Solicitante: ___________________________</Text>
        <Text>Data: ____________________</Text>
      </View>

      <View style={styles.signatureSection}>
        <Text style={styles.signatureText}>Técnico: ___________________________</Text>
        <Text>Data: _______________________</Text>
      </View>

      </View>
    </Page>
  </Document>
  )
}

export default PreTicket
