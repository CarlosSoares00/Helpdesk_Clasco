import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// import { useTicket } from "./TicketContext";
import { useData } from "../../../../context/DataContext";

// Estilos para o PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    lineHeight: 1.6,
  },
  header: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    marginLeft: 5,
  },
});

const TicketPDF = () => {
    

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Detalhes do Ticket</Text>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>ID:</Text>
            <Text style={styles.value}></Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Nome do Usuário:</Text>
            <Text style={styles.value}></Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Seção:</Text>
            <Text style={styles.value}></Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Tipo de Problema:</Text>
            <Text style={styles.value}></Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Prioridade:</Text>
            <Text style={styles.value}></Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Status:</Text>
            <Text style={styles.value}></Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Descrição:</Text>
            <Text style={styles.value}></Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Última Atualização:</Text>
            <Text style={styles.value}></Text>
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default TicketPDF;
