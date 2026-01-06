import { atletEndpointMap } from "../../data/atletEndpointMap"
import api from "../../libs/api"
import type { Role } from "../../types/roleType"

export default function useDeleteAtlet(role: Exclude<Role, "Juri">) {
  const deleteAtlet = async (id: number) => {
    try {
      const endpoint = `${atletEndpointMap[role]}/${id}`
      await api.delete(endpoint)
      return true
    } catch {
      return false
    }
  }

  return { deleteAtlet }
}
