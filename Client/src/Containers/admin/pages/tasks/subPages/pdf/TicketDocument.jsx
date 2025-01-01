import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Estilos do documento
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    marginBottom: 3,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    fontSize: 10,
  },
  signature: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
  },
});

const TicketDocument = ({ticket}) => (
  
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Cabeçalho */}
      <Text style={styles.header}>Relatório Final do Ticket</Text>

      {/* Identificação do Ticket */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Identificação do Ticket</Text>
        <Text style={styles.text}>Número do Ticket: {ticket.id}</Text>
        <Text style={styles.text}>Criado em: </Text>
        <Text style={styles.text}>Última Atualização: </Text>
        <Text style={styles.text}>Status: </Text>
        <Text style={styles.text}>Prioridade: </Text>
      </View>

      {/* Informações do Solicitante */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Informações do Solicitante</Text>
        <Text style={styles.text}>Nome do Solicitante: </Text>
        <Text style={styles.text}>Departamento: </Text>
        <Text style={styles.text}>Cargo: </Text>
        <Text style={styles.text}>Contato: </Text>
      </View>

      {/* Descrição do Problema */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Descrição do Problema</Text>
        <Text style={styles.text}>Tipo de Problema: </Text>
        <Text style={styles.text}>Equipamento: </Text>
        <Text style={styles.text}>Descrição: </Text>
      </View>

      {/* Ação Realizada */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Ação Realizada</Text>
        <Text style={styles.text}>Data de Início do Atendimento: </Text>
        <Text style={styles.text}>Data de Conclusão: </Text>
        <Text style={styles.text}>Descrição das Ações Realizadas:</Text>
        <Text></Text>
      </View>

      {/* Detalhes Técnicos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Detalhes Técnicos</Text>
        <Text style={styles.text}>Técnico Responsável: </Text>
        <Text style={styles.text}>Contato do Técnico: </Text>
        <Text style={styles.text}>Observações Técnicas: </Text>
      </View>

      {/* Aprovação e Assinaturas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>6. Aprovação e Assinaturas</Text>
        <Text style={styles.text}>Solicitante: _____________________________</Text>
        <Text style={styles.text}>Técnico Responsável: _____________________</Text>
      </View>
    </Page>
  </Document>
);

export default TicketDocument;
