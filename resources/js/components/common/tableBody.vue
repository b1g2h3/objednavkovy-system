<template>
  <tbody>
    <tr v-for="item in data" :key="item[_key]">
      <td
        class="border py-2 px-2 text-center"
        v-for="column in columns"
        :key="createKey(item, column)"
      >
        <span v-if="column.path">{{renderCell(item, column)}}</span>
        <span v-else-if="column.comp">
          <component
            :is="column.comp.component"
            v-bind="{...column.comp.props(item)}"
            v-model="item[model]"
          ></component>
        </span>
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import _ from "lodash";
@Component({
  name: "TableBody"
})
export default class TableBody extends Vue {
  @Prop() readonly data!: any;
  @Prop() readonly columns!: any;
  @Prop({ default: "value" }) readonly model!: String;
  @Prop({ default: "id" }) readonly _key: any;

  renderCell = (item, column) => {
    if (column.comp) return;

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item[this._key] + (column.path || column._key);
  };
}
</script>

