<template>
  <Container>
    <Box title="Přihlásit se" class="w-128">
      <Form :succesMessage="dataSuccessMessage">
        <customInput
          v-model="user.username"
          :error="errors.username"
          label="E-mail"
          name="email"
          autofocus="true"
          type="email"
        />
        <customInput
          v-model="user.password"
          :error="errors.password"
          label="Heslo"
          name="password"
          type="password"
        />
        <customFormButton :onClick="login" name="Přihlásit se" :loading="loading" />
        <router-link :to="{ name: 'register' }" class="router-link">Registrovat se</router-link>
        <router-link :to="{ name: 'forgotpassowrd' }" class="router-link">Zapomněli jste heslo?</router-link>
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
  name: "Login",
  components: {
    Container,
    Box,
    Form,
    customInput,
    customFormButton
  }
})
export default class Login extends Vue {
  @Prop() readonly dataSuccessMessage!: any;
  private user = {
    username: "",
    password: ""
  };
  public errors = {};
  loading?: Boolean = false;

  login() {
    this.errors = {};
    this.loading = true;
    this.$store
      .dispatch("retrieveToken", this.user)
      .then(response => {
        this.loading = false;
        this.$router.push({ name: "objednat" });
      })
      .catch(error => {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        } else if (error.response.status === 400) {
          this.errors["username"] = [
            "Chybně zadané heslo nebo uživatelské jméno."
          ];
        }
        this.loading = false;
      });
  }
}
</script>
