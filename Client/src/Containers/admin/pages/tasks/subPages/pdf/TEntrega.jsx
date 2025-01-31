import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import logotipo from './image/Clasco.png';

// Função para formatar data e horário
const formatDateAndTime = (datetime) => {
  if (!datetime) return { date: "Não informado", time: "Não informado" };

  const dateObj = new Date(datetime);
  const date = dateObj.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  const time = dateObj.toLocaleTimeString("pt-BR", { timeZone: "UTC", hour: '2-digit', minute: '2-digit' });

  return { date, time };
};

// Estilos para o documento
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    marginBottom: 20,
  },
  logo: {
    width: 250,
  },
  textHeader: {
    fontSize: 11,
  },
  sectionTitle: {
    fontSize: 15,
    marginBottom: 8,
    color: '#000',
    borderBottom: '1 solid #000',
    paddingBottom: 5,
    marginTop: 15,
  },
  section: {
    marginBottom: 15,
  },
  category: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
    marginBottom: 5,
  },
  data: {
    fontSize: 12,
    color: '#333',
  },
  text: {
    fontSize: 12,
    color: '#111',
    width: "60%",
  },
  boldText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    width: "40%",
  },
  signature: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  signatureSection: {
    textAlign: 'center',
    fontSize: 12,
  },
});

// Componente reutilizável para exibir informações com título e dado
const InfoSection = ({ title, data }) => (
  <Text>
    <Text style={styles.category}>{title}: </Text>
    <Text style={styles.data}>{data || "Não informado"}</Text>
  </Text>
);

const TEntrega = ({ ticket }) => {
  const ticketId = ticket.id;
  const nomeSoli = ticket.nomeFunc;
  const problem = ticket.problem;
  const priority = ticket.priority;
  const status = ticket.status;
  const equip = ticket.equip;
  const cargo = ticket.cargo;
  const Prodescription = ticket.description;
  const Tecdescription = ticket.tec_description;
  const Tecnotes = ticket.tec_notes;
  const departamento = ticket.Department.nome;
  const openedAt = ticket.openedAt;
  const createTicket = ticket.createdAt;
  const closedAt = ticket.closedAt;

  const { date: openedDate, time: openedTime } = formatDateAndTime(openedAt);
  const { date: closedDate, time: closedTime } = formatDateAndTime(closedAt);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Image src={logotipo} style={styles.logo} />
          <View style={styles.textHeader}>
            <Text>Sede: Bairro Bela Vista Baixa, Casa s/nº </Text>
            <Text>Benguela, Angola</Text>
            <Text>Email: clascoprestacaodeservico@gmail.com</Text>
            <Text>Tel. Nº 926954450/950802641</Text>
            <Text>NIF: 5002033763</Text>
          </View>
        </View>

        {/* Detalhes do Chamado */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detalhes do Chamado</Text>
          <InfoSection title="Número do Chamado" data={ticketId} />
          <InfoSection title="Data de Abertura" data={openedDate} />
          <InfoSection title="Horário de Abertura" data={openedTime} />
          <InfoSection title="Prioridade" data={priority} />
        </View>

        {/* Informações do Solicitante */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informações do Solicitante</Text>
          <InfoSection title="Nome do Solicitante" data={nomeSoli} />
          <InfoSection title="Cargo" data={cargo} />
          <InfoSection title="Departamento" data={departamento} />
        </View>

        {/* Detalhes do Problema */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detalhes do Chamado</Text>
          <InfoSection title="Tipo de Problema" data={problem} />
          <InfoSection title="Descrição do Problema" data={Prodescription} />
          <InfoSection title="Equipamento Envolvido" data={equip} />
        </View>

        {/* Atendimento Técnico */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Atendimento Técnico</Text>
          <InfoSection title="Notas Técnicas" data={Tecnotes} />
          <InfoSection title="Solução Aplicada" data={Tecdescription} />
        </View>

        {/* Encerramento do Chamado */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Encerramento do Chamado</Text>
          <InfoSection title="Data de Encerramento" data={closedDate} />
          <InfoSection title="Horário de Encerramento" data={closedTime} />
          <InfoSection title="Status Final" data={status} />
        </View>

        {/* Assinaturas */}
        <View style={styles.signature}>
          <View style={styles.signatureSection}>
            <Text>Solicitante: ___________________________</Text>
            <Text>Data: ____________________</Text>
          </View>
          <View style={styles.signatureSection}>
            <Text>Técnico: ___________________________</Text>
            <Text>Data: _______________________</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default TEntrega;
