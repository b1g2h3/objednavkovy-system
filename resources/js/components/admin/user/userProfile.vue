<template>
  <Container :loading="loading">
    <Sidebar name="Objednávky" :items="user.orders" type="name" :param="setParam">
      <router-link :to="{ name: 'addOrder' }" class="link text-center">
        <i class="fas fa-plus"></i> Přidat
      </router-link>
      <div v-show="user.orders.length === 0">Nemáte žádné objednávky</div>
    </Sidebar>
    <Content :title="`Uživatel ${user.email}`">
      <div class="pb-3 pl-3">
        <button
          v-if="!user.invoice"
          class="bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded"
          v-on:click="addInvoice"
        >Přidat fakturační údaje</button>
        <button
          v-else
          class="bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded"
          v-on:click="changeInvoice"
        >Změnit fakturační údaje</button>
        <button
          class="bg-transparent hover:bg-red-700 text-black font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded"
          v-on:click="deleteUser"
        >Odstranit uživatele</button>
      </div>
      <userDetails :user="user" />
      <router-view />
    </Content>
  </Container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import Container from "../../common/container.vue";
import Content from "../../common/content.vue";
import userDetails from "../../order/userDetails.vue";
import Sidebar from "../../common/sidebar.vue";
import Pagination from "../../common/Pagination.vue";
@Component({
  name: "userProfile",
  components: {
    Container,
    Content,
    userDetails,
    Sidebar,
    Pagination,
  },
  computed: mapGetters(["orders", "order", "ordersFilter"]),
  methods: mapMutations(["fetchUserProfile"]),
})
export default class userProfile extends Vue {
  @Prop() successMessage?: String;
  @Prop() id?: Number;
  errors!: [];
  loading?: Boolean = false;

  get user() {
    return this.$store.getters.userProfile;
  }

  setParam = (order) => {
    return {
      name: "showOrder",
      params: { id: order.id },
    };
  };

  addInvoice() {
    this.$router.push({
      name: "addInvoice",
      params: { id: this.id },
    });
  }
  changeInvoice() {
    this.$router.push({
      name: "changeInvoice",
      params: { id: this.id },
    });
  }
  deleteUser() {
    if (confirm("Jste si jistý?")) {
      this.axios
        .delete(`deleteuser/${this.id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then((res) => {
          this.$router.push({
            name: "showUsers",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  beforeMount() {
    this.loading = true;
    this.$store
      .dispatch("fetchUserProfile", this.id)
      .then((res) => (this.loading = false))
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>
