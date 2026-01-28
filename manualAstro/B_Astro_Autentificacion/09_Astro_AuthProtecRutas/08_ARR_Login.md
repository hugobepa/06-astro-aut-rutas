# LOGIN

0. creamos accion para login y rellenamos `a_action` `src\actions\auth\login.action.ts`:

- FICHERO:

```

```

1. añadimos al archivo de barril `src\actions\auth\index.ts`:

```
export * from "./login.action";
export * from "./logout.action";
export * from "./register.action";
```

2. importamos al index de acciones `src\actions\index.ts`:

```
import { loginUser, logout, registerUser } from "./auth";

export const server = {
  registerUser,
  logout,
  loginUser,
};
```

3. importamos accion a pagina `src\pages\login.astro`
   - crear formulario: ` <div class="space-y-5">` L-26 a ` <form class="space-y-5">`

- Fichero:

```



<script> </script>
```
