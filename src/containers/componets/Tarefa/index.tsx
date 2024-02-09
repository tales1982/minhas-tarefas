import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../../store/reducers/tarefas'
import TarefaClass from '../../../models/Tarefas'
import { BotaoSalva } from '../../../styles'

type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  priorité,
  status,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="priorité" priorité={priorité}>
        {priorité}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalva
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    priorité,
                    status,
                    titulo,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Sauver
            </BotaoSalva>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Annuler
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Éditer</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Supprimer
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
