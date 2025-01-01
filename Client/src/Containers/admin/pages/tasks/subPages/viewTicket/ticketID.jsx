import * as V from './viewTicket.js'
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';

import TEntrega from '../pdf/TEntrega.jsx';
// import PreTicket from '../../views/PreTicket.jsx'
// import TicketDocument from '../pdf/TicketDocument.jsx';
import { useData } from '../../../../../../context/DataContext.jsx';

const styles = StyleSheet.create({
  pages: {
    width: 700,
    height: 1020,
    marginTop: "10px"
  }
})

const TicketID = () => {
    const { ticket } = useData()
  return (
      <V.viewTicketContainer>

        <V.pageContent>
          <PDFViewer style={styles.pages}>
            <TEntrega  ticket={ticket}/>
            {/* <PreTicket/> */}
            {/* <TicketDocument ticket={ticket}/> */}
          </PDFViewer>

        </V.pageContent>
        
      </V.viewTicketContainer>
  )
}


export default TicketID