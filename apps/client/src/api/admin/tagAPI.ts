import ITag from '../../interface/Tag';
import { http } from './../index';


export function fetchAllTag(){
  return http.get(`/tag`);
}

export function fetchTag(id: number){
  return http.get(`/tag/${id}`);
}

export function createTag({ name, discountID }: ITag) {
  return http.post(`/tag`, { name, discountID })
}

export function updateTag({ id, name, discountID }: ITag) {
  return http.patch(`/tag/${id}`, {
    name,
    discount: {
      connect: {
        id: discountID
      }
    },
  })
}

export function deleteTag({ id }: ITag) {
  return http.delete(`/tag/${id}`)
}