import { FaArchive, FaClipboard, FaClipboardCheck, FaFileAlt, FaPoll, FaSearch } from 'react-icons/fa'
import * as B from './BD.js'


const BD = () => {

  return (
    <B.BContainer>
      <B.header>
        <B.titleSection>Gerenciamento de Conhecimento</B.titleSection>
        <B.buttonsLinks>
          <B.buttonLink> <FaSearch/> Ver base de conhecimento</B.buttonLink>
          <B.buttonLink><FaFileAlt/> Novo Artigo</B.buttonLink>
          <B.buttonLink> <FaArchive/> Nova Categoria</B.buttonLink>
        </B.buttonsLinks>
      </B.header>
    </B.BContainer>
  )
}

export default BD
