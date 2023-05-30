<template>
  <v-data-table
      fixed-header="true"
      width="1%"
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="sessions"
      item-value="id"
      class="elevation-16"
  ></v-data-table>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    return {
      itemsPerPage: 5,
      headers: [
        // {},
        {
          title: 'Идентификатор',
          align: 'center',
          sortable: true,
          key: 'id',
          width: '5%',
        },
        {title: 'Название сессии', align: 'center', key: 'name', width: '35%'},
        {title: 'Название вакансии', align: 'center', key: 'vacancy', width: '35%'},
        {title: 'Статус', align: 'center', key: 'status', width: '20%'},
      ],
      sessions: [
        {
          id: '1',
          name: 'Кондитер ИП Иванов',
          vacancy: 'Кондитер',
          status: 'В очереди',
        },
        {
          id: '2',
          name: 'Кондитер ИП Иванов',
          vacancy: 'Кондитер',
          status: 'В обработке',
        },
        {
          id: '3',
          name: 'Кондитер ИП Иванов',
          vacancy: 'Кондитер',
          status: 'Ожидает разметки',
        },
        {
          id: '4',
          name: 'Кондитер ИП Иванов',
          vacancy: 'Кондитер',
          status: 'Завершено',
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>