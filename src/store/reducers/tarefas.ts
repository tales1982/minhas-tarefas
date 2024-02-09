import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefas'
import * as enums from '../../containers/utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estuda JavaScript rever os exercicios',
      priorité: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'JavaScript'
    },
    {
      id: 2,
      descricao: 'Estuda React par prova',
      priorité: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'React'
    },
    {
      id: 3,
      descricao: 'Java rever os exercicios',
      priorité: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Java'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Il existe déjà une tâche portant ce nom')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice.actions

export default tarefasSlice.reducer
