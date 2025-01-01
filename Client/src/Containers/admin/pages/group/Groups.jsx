import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'

import * as G from './group.js'

const Groups = () => {

  return (
    <G.groupContainer>

      <G.header>
        <G.title>Groups</G.title>
        <G.modalCreate>Criar Novo Grupo</G.modalCreate>
      </G.header>


      <G.groupContent>
        <G.group>
          <G.headerGroup>
            <G.titleGroup>Direção / Gabinete</G.titleGroup>
            
            <G.btnControl>
                <i><FaCircleArrowLeft/></i>
                <i><FaCircleArrowRight/></i>
              </G.btnControl>
          </G.headerGroup>

          <G.Ul>
            {/* Criar um Slider aqui  */}
            <G.groupList>
              <G.groupSig>RH</G.groupSig>
              <G.titleGroup2>Recursos Humanos</G.titleGroup2>
            </G.groupList>

            <G.groupList>
              <G.groupSig>Fisc</G.groupSig>
              <G.titleGroup2>Direção Municipal da Fiscalização</G.titleGroup2>
            </G.groupList>

            <G.groupList>
              <G.groupSig>GMDEI</G.groupSig>
              <G.titleGroup2>Desenvolvimento Econômico Integrado</G.titleGroup2>
            </G.groupList>

            <G.groupList>
              <G.groupSig>GMAJ</G.groupSig>
              <G.titleGroup2>Municipal dos Assuntos Juridicos</G.titleGroup2>
            </G.groupList>
            
          </G.Ul>

        </G.group>

        <G.group>
          <G.headerGroup>
              <G.titleGroup>Secção</G.titleGroup>

              <G.btnControl>
                <i><FaCircleArrowLeft/></i>
                <i><FaCircleArrowRight/></i>
              </G.btnControl>

          </G.headerGroup>

          <G.Ul>
            {/* Criar um Slider aqui  */}
            <G.groupList>
              <G.groupSig>Ex</G.groupSig>
              <G.titleGroup2>Secção do Expediênte </G.titleGroup2>
            </G.groupList>
            <G.groupList>
              <G.groupSig>C</G.groupSig>
              <G.titleGroup2>Secção da Contabilidade e Contratação Publica </G.titleGroup2>
            </G.groupList>
            <G.groupList>
              <G.groupSig>PL</G.groupSig>
              <G.titleGroup2>Secção Patrimonio e logistica </G.titleGroup2>
            </G.groupList>
          </G.Ul>
        </G.group>
      </G.groupContent>

    </G.groupContainer>
  )
}

export default Groups
