<template>
  <div class="text-center">
    <v-card
        class="mx-auto"
        max-width="1000"
    >
      <!--      Итерация по items-->
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item
              v-for="(item, i) in items"
              :key="i"

          >
            <v-list-item-content>
              <v-btn
                  color="primary"
                  dark
                  v-on:click="item.active = !item.active"
                  v-text="item.title"
                  block
                  class="text-left"
              />
              <!--      Итерация по subitems-->
              <v-list>
                <v-list-item-group v-model="item.text">
                  <v-list-item
                      v-for="(subitem, si) in item.subitems"
                      :key="si"
                      :class="!item.active ? 'hidden v-list__tile' : 'v-list__tile'"
                  >
                    <v-list-item-content>
                      <v-btn
                          color="blue"
                          v-on:click="subitem.active = !subitem.active"
                          block
                          class="text-left"
                          v-text="subitem.text"
                      />
                      <!--      Итерация по subsubitems-->
                      <v-list>
                        <v-list-item-group>
                          <v-list-item
                              v-for="(sub_subitem, ssi) in subitem.subitems"
                              :key="ssi"
                              :class="!subitem.active ? 'hidden' : ''"
                              width="100%"
                          >
                            <v-list-item-content>
                              <v-checkbox hide-details
                                          v-model="sub_subitem.active"
                                          class="alt-size"
                                          :label=sub_subitem.text
                                          >
                              </v-checkbox>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-card>
    <v-btn
        color="blue"
    >Применить</v-btn>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  data() {
    return {
      items: [
        {
          title: 'Навыки',
          subitems: [
            {
              text: 'Изготовление тортов',
              active: false,
              subitems: [
                {
                  text: 'Приготовление тортов',
                  active: true,
                },
                {
                  text: 'Украшение тортов',
                  active: false,
                }
              ]
            },
            {
              text: 'Украшение пирожных',
              active: false,
              subitems: []
            }
          ],
          active: false
        },
        {
          title: 'Объекты',
          active: false,
          subitems: [
            {
              text: 'Торт',
              active: false,
              subitems: [
                {
                  text: 'Песочные торты',
                  active: true,
                },
                {
                  text: 'Бисквитные торты',
                  active: false,
                }
              ]
            }
          ]
        },
      ],
      model: 1,
    }
  }
}
</script>

<style scoped>
.hidden {
  display: none;
}

::v-deep .alt-size .v-label {
  font-size: 1.2rem;
}

.text-left {
  justify-content: start;
}
</style>