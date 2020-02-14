<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Register</v-toolbar-title>
              <v-spacer />
              <v-btn @click="goToLogin()" icon>
                <v-icon>input</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text @keyup.enter="signIn()">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  id="email"
                  label="Email"
                  prepend-icon="person"
                  v-model="fields.email"
                  :rules="rules.emailRules"
                  type="text"
                  autocomplete="off"
                  required
                />
                <v-text-field
                  id="password"
                  label="Password"
                  prepend-icon="lock"
                  :append-icon="value ? 'visibility_off' : 'visibility'"
                  @click:append="() => (value = !value)"
                  :type="value ? 'password' : 'text'"
                  v-model="fields.password"
                  :rules="rules.passwordRules"
                  required
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="signUp()" :disabled="!valid">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import Auth from '../../shared/core/auth/authentication';

export default {
  data () {
    return {
      valid: true,
      value: true,
      fields: {
        email: '',
        password: ''
      },
      rules: {
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => {
            const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/;
            return (
              pattern.test(v) ||
              'Min. 8 characters with at least one capital letter, a number and a special character.'
            );
          }
        ]
      }
    };
  },
  methods: {
    signUp: function () {
      if (this.$refs.form.validate()) {
        Auth.signUp({ email: this.fields.email, password: this.fields.password }, () => {
          this.$router.replace({ name: 'Dashboard' });
        }, (error) => {
          // Error
          console.log(error);
        });
      }
    },
    goToLogin: function () {
      this.$router.replace('Login');
    }
  }
};
</script>
