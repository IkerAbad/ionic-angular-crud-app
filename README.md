# ionic-angular-crud-app

App móvil con Ionic y Angular (mayo de 2023, ciclo de DAM) que gestiona un listado de canciones (nombre y artista) con altas, ediciones y bajas. Es la base sobre la que después hice [ionic_changeorg](https://github.com/IkerAbad/ionic_changeorg).

## Qué hay

- Registro e inicio de sesión (`auth`), con el token guardado en el almacenamiento de Ionic.
- Página de inicio con el listado, y páginas para añadir y editar una canción.
- `song.service.ts` hace el CRUD por HTTP contra `http://localhost:3000/api/...` (`create-song`, `get-song/:id`, `update-song/:id`, `delete-song/:id`). El servidor no está en este repositorio.
- Capacitor configurado para llevarla a Android o iOS.
- `ng build` compila sin errores. No la he probado contra ningún servidor ni en un dispositivo desde aquí.

## Cómo probarla

Hace falta un servidor que responda en esas rutas. Luego:

```
npm ci
npx ionic serve
```

## Licencia

MIT, ver [LICENSE](LICENSE).

---

# ionic-angular-crud-app (English)

A mobile app with Ionic and Angular (May 2023, DAM vocational course) that manages a list of songs (name and artist) with create, edit and delete. It is the base I later used for [ionic_changeorg](https://github.com/IkerAbad/ionic_changeorg).

## What's inside

- Sign-up and login (`auth`), with the token kept in Ionic storage.
- A home page with the list, and pages to add and edit a song.
- `song.service.ts` does the CRUD over HTTP against `http://localhost:3000/api/...` (`create-song`, `get-song/:id`, `update-song/:id`, `delete-song/:id`). The server is not in this repository.
- Capacitor configured to take it to Android or iOS.
- `ng build` compiles without errors. I have not tested it against any server or on a device from here.

## Trying it

You need a server answering on those routes. Then:

```
npm ci
npx ionic serve
```

## License

MIT, see [LICENSE](LICENSE).
