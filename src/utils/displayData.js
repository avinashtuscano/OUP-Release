import { getElement } from "./utils.js";

const envContainer = getElement(".env-container");

function displayData(data) {
  console.log(data);

  const releaseData = `<article class="environment">
          <div class="env-header">
            <h5 class="env-name">${data.Dev.env}</h5>
            <h5 class="env-status">Dummy - Online</h5>
          </div>
          <div class="env-info">
            <div class="release">
              <p>Release</p>
              <p>${data.Dev.version}</p>
            </div>
            <div class="release">
              <p>CES</p>
              <p>Dummy - v27.4.0-rc.6</p>
            </div>
            <div class="release">
              <p>Auth0</p>
              <p>Dummy - v1.3.4-rc.1</p>
            </div>
            <div class="release">
              <p>Shibboleth</p>
              <p>Dummy - 21.1.0</p>
            </div>
            <div class="release">
              <p>EAC</p>
              <p>Dummy - v27.1.0-rc0</p>
            </div>
            </article>            
            <article class="environment">
          <div class="env-header">
            <h5 class="env-name">${data.Test.env}</h5>
            <h5 class="env-status">Dummy - Online</h5>
          </div>
          <div class="env-info">
            <div class="release">
              <p>Release</p>
              <p>${data.Test.version}</p>
            </div>
            <div class="release">
              <p>CES</p>
              <p>Dummy - v27.4.0-rc.6</p>
            </div>
            <div class="release">
              <p>Auth0</p>
              <p>Dummy - v1.3.4-rc.1</p>
            </div>
            <div class="release">
              <p>Shibboleth</p>
              <p>Dummy - 21.1.0</p>
            </div>
            <div class="release">
              <p>EAC</p>
              <p>Dummy - v27.1.0-rc0</p>
            </div>
            </article>            
            <article class="environment">
          <div class="env-header">
            <h5 class="env-name">${data.Perf.env}</h5>
            <h5 class="env-status">Dummy - Online</h5>
          </div>
          <div class="env-info">
            <div class="release">
              <p>Release</p>
              <p>${data.Perf.version}</p>
            </div>
            <div class="release">
              <p>CES</p>
              <p>Dummy - v27.4.0-rc.6</p>
            </div>
            <div class="release">
              <p>Auth0</p>
              <p>Dummy - v1.3.4-rc.1</p>
            </div>
            <div class="release">
              <p>Shibboleth</p>
              <p>Dummy - 21.1.0</p>
            </div>
            <div class="release">
              <p>EAC</p>
              <p>Dummy - v27.1.0-rc0</p>
            </div>
            </article>            
            <article class="environment">
          <div class="env-header">
            <h5 class="env-name">${data.UAT.env}</h5>
            <h5 class="env-status">Dummy - Online</h5>
          </div>
          <div class="env-info">
            <div class="release">
              <p>Release</p>
              <p>${data.UAT.version}</p>
            </div>
            <div class="release">
              <p>CES</p>
              <p>Dummy - v27.4.0-rc.6</p>
            </div>
            <div class="release">
              <p>Auth0</p>
              <p>Dummy - v1.3.4-rc.1</p>
            </div>
            <div class="release">
              <p>Shibboleth</p>
              <p>Dummy - 21.1.0</p>
            </div>
            <div class="release">
              <p>EAC</p>
              <p>Dummy - v27.1.0-rc0</p>
            </div>
            </article>            
            <article class="environment">
          <div class="env-header">
            <h5 class="env-name">${data.PreProd.env}</h5>
            <h5 class="env-status">Dummy - Online</h5>
          </div>
          <div class="env-info">
            <div class="release">
              <p>Release</p>
              <p>${data.PreProd.version}</p>
            </div>
            <div class="release">
              <p>CES</p>
              <p>Dummy - v27.4.0-rc.6</p>
            </div>
            <div class="release">
              <p>Auth0</p>
              <p>Dummy - v1.3.4-rc.1</p>
            </div>
            <div class="release">
              <p>Shibboleth</p>
              <p>Dummy - 21.1.0</p>
            </div>
            <div class="release">
              <p>EAC</p>
              <p>Dummy - v27.1.0-rc0</p>
            </div>
            </article>            
            <article class="environment">
          <div class="env-header">
            <h5 class="env-name">${data.Prod.env}</h5>
            <h5 class="env-status">Dummy - Online</h5>
          </div>
          <div class="env-info">
            <div class="release">
              <p>Release</p>
              <p>${data.Prod.version}</p>
            </div>
            <div class="release">
              <p>CES</p>
              <p>Dummy - v27.4.0-rc.6</p>
            </div>
            <div class="release">
              <p>Auth0</p>
              <p>Dummy - v1.3.4-rc.1</p>
            </div>
            <div class="release">
              <p>Shibboleth</p>
              <p>Dummy - 21.1.0</p>
            </div>
            <div class="release">
              <p>EAC</p>
              <p>Dummy - v27.1.0-rc0</p>
            </div>
            </article>`;

  envContainer.innerHTML = releaseData;
}

export default displayData;
