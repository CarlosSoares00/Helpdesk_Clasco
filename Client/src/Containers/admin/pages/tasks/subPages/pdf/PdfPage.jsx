import logo from './image/Clasco.png'
import PropTypes from 'prop-types';
import {
    Document,
    Text,
    Page, 
    StyleSheet,
    Image,
    View
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    padding: 50,
  },
  header: {
    height: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center", 
    gap: 10,
    lineHeight: 0.5,
    fontSize: 10,
    marginBottom: 40,
  },
  logo: {
    width: 280,
  },
  headerContent: {
    display: "flex",
    fontSize: 10,
    flexDirection: "column",
    lineHeight: 1.2,
  },
  
  body: {
    
  },  
  titleBody: {
    fontSize: 14,
    textTransform: "uppercase",
    textDecoration: "underline",
    marginBottom: 30,
  },
  title2: {
    fontSize: 14,
  },
  Destinatario: {
    marginTop: 30,
    fontSize: 13,
  },



  title: {
    fontSize: 24,
    textAlign: "center",
    // fontFamily: "Oswald",
    fontWeight: "bold",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    padding: 10,
    flexGrow: 10,
  },
  parragraph: {
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 1.5,
    margin: 10,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0, 
    right: 0,
    textAlign: "center",
    color: "grey",
  }
})

const PdfPage = ({ticketSelect3}) => {
  console.log('Graças a Deus chegasmos', ticketSelect3)
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Image src={logo} style={styles.logo}/>
          <View style={styles.headerContent}>
          <Text>Sede: Bairro Bela Vista Baixa, Casa s/nº</Text>
          <Text>Benguela, Angola, Benguela</Text>
          <Text>E-mail:clascoprestacaodeservico@gmail.com</Text>
          <Text>Tel. Nº 926954450/950802641</Text>
          <Text>NIF: 5002033763</Text>
          </View>
          
        </View>
        
        <View style={styles.body}>

          <Text style={styles.titleBody}>TERMO DE ENTREGA DE EQUIPAMENTOS TECNOLÓGICOS</Text>

          <View >
            <Text style={styles.title2}>Número do Termo: {ticketSelect3.id}</Text>
            <Text style={styles.title2}>Data: {ticketSelect3.updated_at}</Text>
          </View>

          <View style={styles.Destinatario}>
            <Text style={styles.title2}>Destinatário:</Text>
            <Text>Administração Municipal de Benguela</Text>
            <Text>Endereço: [Endereço da Administração]</Text>
            <Text>Responsável pelo Recebimento: [Nome do responsável]</Text>
            <Text>Telefone: +244 XXXX-XXXX</Text>
          </View>
        </View>

        <View style={styles.pageNumber}>
          <Text render={({pageNumber, totalPages}) => `
            ${pageNumber}/${totalPages}
          `}/>
        </View>
      </Page>
    </Document>
  )
}



PdfPage.propTypes = {
  ticketSelect3: PropTypes.shape({
  id: PropTypes.number.isRequired,
  user_name: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
  })
}



export default PdfPage