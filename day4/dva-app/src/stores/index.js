import {
  createStore
} from 'redux'

const counter = (state = {
  searchText: '',
  name: 'yao',
  gallery: {
    // 预览图片的状态
    status: false,
    // 预览图片地址
    imgUrl: ''
  }
}, action) => {
  switch (action.type) {
    case 'SETSEARCHTEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    case 'SETGALLERY':
      return {
        ...state,
        gallery: action.gallery
      }
    default:
        return state
  }
}

const store = createStore(counter)

export default store