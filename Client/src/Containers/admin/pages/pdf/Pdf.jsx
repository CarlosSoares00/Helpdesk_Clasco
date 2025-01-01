import React from 'react'
import { PDFViewer } from "@react-pdf/renderer";
import TicketPDF from './TicketPDF';


const Pdf = () => {
  return (
    <PDFViewer style={{ width: "100%", height: "600px" }}>
        <TicketPDF />
    </PDFViewer>
  )
}

export default Pdf