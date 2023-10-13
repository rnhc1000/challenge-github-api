## useState/useEffect/axios Challenge - ReactJS Professional - @devsuperior -
ReactJS Professional Challenge on hooks/axios
- Components
- Routes
- Yarn
- Vite
- Axios
## _Table of contents_
- [Overview](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I practiced](#what-i-practiced)
- [Continued development](#continued-development)
- [Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
## _Overview_
The design is structured as shown:
- src|
    - assets|
    - components|
        - About
          - index.tsx
          - styles.css
        - HomeBody
        - NotFoundPage
        - Product
        - ProductsMenu
   - routes
        - About Us
        - BodyHome
        - Home
        - NotFound
        - Products
            - Books
            - Computers
            - Electronics
   - App.tsx
   - index.css
   - main.tsx
   - index.html
   - tsconfig.json
   - tsconfig.node.json
   - vite.config.js
   - yarn.lock
- public|

## _Screenshot_
[![](./challengeGitHubAPI.png)]()
## _Links_
- Live Site URL: [] 
## _Built with_

 ![](https://ferreiras.dev.br/assets/images/icons/git-scm-icon.svg) | ![](https://ferreiras.dev.br/assets/images/icons/react.svg) | ![](https://ferreiras.dev.br/assets/images/icons/vite.svg) | ![](https://ferreiras.dev.br/assets/images/icons/yarn-title.svg) | ![](https://ferreiras.dev.br/assets/images/icons/ts-logo.svg) | ![](https://ferreiras.dev.br/assets/images/icons/icons8-javascript.svg) | ![](https://ferreiras.dev.br/assets/images/icons/icons8-visual-studio-code.svg) | ![](https://ferreiras.dev.br/assets/images/icons/axios-logo.svg)| ![](https://ferreiras.dev.br/assets/images/icons/react-router-stacked-color-inverted.svg)

 ## _What I practiced_
```jsx
import './styles.css';
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import LoadBar from '../../../components/LoadBar';
import * as productService from '../../../services/product-service';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
// import axios from 'axios';


export default function Catalog() {

  /**
   * 1. useState criado como uma lista de produtos
   * e inicializado com um lista vazia[]
   */

  const [products, setProducts] = useState<ProductDTO[]>([]);

  /**
   * Ao montar o componente buscar os primeiros elementos
   * useEffect(() => {}, []) argumento função e lista de dependencias
   */

  useEffect(() => {
    productService.findAll()
    .then(response => {
      setProducts(response.data.content)
    });
  },[]);
  return (
    <>
      <main>
        <section id="dsc-catalog-section" className="dsc-container">
          <SearchBar />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {
              // productService.findAll().map(product => <CatalogCard key={product.id} product={product} />)
              products.map(product => <CatalogCard key={product.id} product={product} />)

            }

          </div>

          <LoadBar />
        </section>
      </main>
    </>
  );
}

``` 

## _Continued development_
- Next challenge: Moving forward 
### _Useful resources_
- [https://reactrouter.com/] React Router enables "client side routing".
- [https://reactjs.org] React lets you build user interfaces out of individual pieces called components!.
- [https://yarnpkg.org/] Open-source package manager used to manage dependencies in  JavaScript.
- [https://vitejs.dev/guide/] Build tool that aims to provide a faster and leaner development experience for modern web projects.
## _Author_
- Website - [https://ferreiras.dev.br] 
## Acknowledgments