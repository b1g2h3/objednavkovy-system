<template>
  <Container>
    <Box title="Zapomenuté heslo" class="w-128">
      <Form :succesMessage="dataSuccessMessage">
        <customInput
          v-model="user.email"
          :error="errors.email"
          label="Váš E-mail"
          name="email"
          autofocus="true"
        />
        <customInput
          v-model="user.password"
          :error="errors.password"
          label="Nové heslo"
          type="password"
        />
        <customInput
          v-model="user.password_confirmation"
          :error="errors.password_confirmation"
          label="Potvrďte heslo"
          type="password"
        />
        <customFormButton :onClick="resetPassword" name="Potvrdit heslo" :loading="loading" />
        <router-link :to="{ name: 'login' }" class="router-link">Přihlásit se</router-link>
        <router-link :to="{ name: 'register' }" class="router-link">Registrovat se</router-link>
      </Form>
    </Box>
  </Container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Container from "../common/container.vue";
import Box from "../common/box.vue";
import Form from "../common/form.vue";
import customInput from "../common/formInput.vue";
import customFormButton from "../common/formButton.vue";
@Component({
  name: "ResetPassowrd",
  components: {
    Container,
    Box,
    Form,
    customInput,
    customFormButton,
  },
})
export default class ResetPassowrd extends Vue {
  @Prop() dataSuccessMessage!: any;
  public errors = {};
  loading?: Boolean = false;
  public user = {
    email: "",
    token: "",
    password: "",
    password_confirmation: "",
  };

  created() {
    this.user.token = this.$route.query.token;
    this.user.email = this.$route.query.email;
  }

  async resetPassword() {
    this.errors = {};
    this.loading = true;
    this.$store
      .dispatch("resetPassword", this.user)
      .then((res) => {
        this.loading = false;
        console.log(res);
        this.dataSuccessMessage = res.data.status;
        // this.$router.push({ name: "objednat" });
      })
      .catch((error) => {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        } else if (error.response.status == 400) {
          this.errors = { email: [error.response.data.email] };
        }
        this.loading = false;
      });
  }
}
</script>
