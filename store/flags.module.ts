/* eslint-disable @typescript-eslint/no-explicit-any */
import { acceptHMRUpdate, defineStore } from 'pinia'
import Item from '~/types/Item'
import type ItemOrder from '~/types/ItemOrder'
import ItemDataService from '~/services/itemDataService'

export const useFlagStore = defineStore('flag', () => {
  const popUpSignIn = ref(false)
  const popUpBuy = ref(false)
  const popUpCheck = ref(false)
  const shade = ref(false)
  const render = ref(-1)

  //let orderedItem: ItemOrder[] = [{itemId: '3a18b161-4a62-48cf-b38b-8faba43c6ba5', amount: 100, inbound: true, bundleId: '1', delivery: true, email: '@', id: '1', location: 'f', paid: false, phone: 'f'}]
  let orderedItem: ItemOrder[]
  const items: Item[] = []
  let allSubCategories: Promise<any>
  let subCategoryContent: Promise<any>
  let categoryContent: Promise<any>
  let allCategories: Promise<any>
  let categoryId: string | undefined

  function changePopUpSignIn() {
    popUpSignIn.value = !popUpSignIn.value
    shade.value = true
  }

  function changePopUpSignUp() {
    popUpSignIn.value = !popUpSignIn.value
  }

  function closePopUps() {
    popUpSignIn.value = false
    popUpBuy.value = false
    popUpCheck.value = false
    shade.value = false
    orderedItem = [] as ItemOrder[]
  }

  function backTrack() {
    popUpCheck.value = false
    popUpBuy.value = true
  }

  function changePopUpBuy(data: ItemOrder[]) {
    orderedItem = data
    popUpBuy.value = true
    shade.value = true
  }

  function changePopUpCheck() {
    popUpCheck.value = true
    popUpBuy.value = false
    shade.value = true
  }

  function changePopUpPayment() {
    popUpBuy.value = false
    shade.value = true
  }

  function rerender() {
    render.value++
  }

  function getOrder() {
    return orderedItem
  }

  async function getAllSubCategories() {
    if (!allSubCategories)
      allSubCategories = ItemDataService.getAllSubCategories()
    return allSubCategories
  }

  async function getAllCategories() {
    if (!allCategories)
      allCategories = ItemDataService.getAllCategories()
    return allCategories
  }

  async function getSubCategory(id: any) {
    if (!subCategoryContent)
      subCategoryContent = ItemDataService.getSubCategory(id)
    return subCategoryContent
  }

  async function getByCategory(id: any) {
    if (!categoryContent)
      categoryContent = ItemDataService.getByCategory(id)
    return categoryContent
  }

  return {
    changePopUpSignIn,
    changePopUpSignUp,
    closePopUps,
    rerender,
    changePopUpBuy,
    getOrder,
    changePopUpCheck,
    getAllCategories,
    getAllSubCategories,
    getSubCategory,
    getByCategory,
    changePopUpPayment,
    backTrack,
    popUpSignIn,
    popUpCheck,
    shade,
    render,
    popUpBuy,
    items,
    categoryId,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useFlagStore, import.meta.hot))
