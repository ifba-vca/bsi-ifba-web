import React from 'react'
import {Container,Content,Cover,Title,DisciplineSubtitle,Subtitle,Text,Box,Close} from './styles'
import {Discipline} from '../../../interfaces/components/atoms'
import CCO from '../../../util/jpg/CCO.jpg'
import COM from '../../../util/jpg/COM.jpg'
import HUM from '../../../util/jpg/HUM.jpg'
import MAT from '../../../util/jpg/MAT.jpg'
import OPT from '../../../util/jpg/OPT.jpg'
import SUP from '../../../util/jpg/SUP.jpg'
import TEC from '../../../util/jpg/TEC.jpg'

interface Props {
  modalRef?: any | null;
  className?: any | null;
  close:  any | null;
  discipline: Discipline |null;
}

const Index: React.FC<Props> = props => {
  const {close,discipline} = props
  const imgCover = ():string => {
    switch (discipline!.type){
      case 'CCO':
        return CCO
      case 'COM':
        return COM
      case 'HUM':
        return HUM
      case 'MAT':
        return MAT
      case 'OPT':
        return OPT
      case 'SUP':
        return SUP
      case 'TEC':
        return TEC
      default:
        return TEC
    }
  }

  // @ts-ignore
  return (
    <>
      <Container ref={props.modalRef} className={props.className}>
        <Content>
          <Close id="close" onClick={()=>close()}>X</Close>
          <Cover src={imgCover()}/>
          <Title>{discipline?.name}</Title>
          {discipline?.description && (<DisciplineSubtitle>Disciplina: {discipline?.description}</DisciplineSubtitle>)}
          <Subtitle>Prof. {discipline?.teacher}</Subtitle>
          <Box>
            <Text>Carga Horária Semanal: {discipline?.h_weekly}h</Text>
            <Text>Carga Horária total: {discipline?.h_total}h</Text>
            <Text>Código: {discipline?.id}</Text>
          </Box>
        </Content>
      </Container>
    </>
  );
}
/*<p></p>
* <p>{discipline?.type}</p>
* <p>{discipline?.h_total}</p>
* <p>{discipline?.id}</p>
* <p>{discipline?.h_weekly}</p>
* <p>{discipline?.teacher}</p>
* */
export default Index;
