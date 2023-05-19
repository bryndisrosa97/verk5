# Vefforritun 2, 2021, verkefni 5

## Linkur á heroku
https://verk5frettir.herokuapp.com/

[Kynning á verkefni](https://youtu.be/EyRD1dVVDiU).
![image](https://github.com/bryndisrosa97/verk5/assets/61384036/4dda6896-b05f-469c-86f9-03349393aa4e)

## Routing

Setja skal upp og nota react router.

Yfirlit er á `/` og birtir alla flokka frá vefþjónustu.

Á `/:id` eru birtar fréttir fyrir þann flokk. Ef flokkur er ekki til er `404` síða sýnd (einfaldlega síða sem segir að síðan sé ekki til.) Setja skal `Til baka` link sem viðheldur stöðu, þ.e.a.s. notar `<Link>` úr react router.

Ef reynt er að skoða aðrar slóðir er `404` síða sýnd.

## Gögn

[RÚV RSS API proxy](https://github.com/vefforritun/vef2-2021-ruv-rss-json-proxy) veitir aðgang að nýjustu fréttum frá RÚV. Tólið er sett upp á `https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/`.

Af handahófi er það lengi að skila niðurstöðum og/eða skilar villum. Gera skal ráð fyrir því með því að útfæra loading og error state fyrir componenta.

Nota skal `REACT_APP_API_URL` til að sækja slóð á vefþjónustu, sjá `.env.example`.

## Síður

Yfirlitssíða birtir flokka ásamt fimm nýjustu fréttum og link á fréttasíðu.

Fréttasíða birtir allar fréttir í flokk.

## Útlit

[Sjá útlit](./utlit).

Setja skal upp Sass og útfæra útlit per component í Sass skrá fyrir hann.

Ekki þarf að birta nákvæmlega eins útlit, en það skal í grunninn vera eins:

* Yfirlitssíða með fimm kassa með titli og fimm fréttum hver, linkur til að sjá allar
* Fréttasíða með titli, öllum fréttum og link til baka

## Tæki og tól

Gefinn er grunnur, með uppbyggingu á verkefni, byggt á `create-react-app`. Ekki ætti að þurfa að búa til fleiri componenta en það er leyfilegt. Ekki þarf að útbúa _container_ component, en það er leyfilegt.

