import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../componets/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../containers/utils/enums/Tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Recherche"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criterio="status"
            legenda="En attente"
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDA}
            criterio="status"
            legenda="Complété"
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            criterio="priorité"
            legenda="Urgent"
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            criterio="priorité"
            legenda="Important"
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            criterio="priorité"
            legenda="Normal"
          />
          <FiltroCard criterio="tous" legenda="Tous" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
