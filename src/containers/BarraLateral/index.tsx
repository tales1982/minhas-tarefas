import FiltroCard from '../componets/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Busca" />
      <S.Filtros>
        <FiltroCard legenda="Pedentes" contador={1} />
        <FiltroCard legenda="Concluidas" contador={2} />
        <FiltroCard legenda="Urgentes" contador={3} />
        <FiltroCard legenda="Importantes" contador={4} />
        <FiltroCard legenda="Normal" contador={5} />
        <FiltroCard ativo legenda="Todas" contador={6} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
