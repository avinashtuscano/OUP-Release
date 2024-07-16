import { getElement } from "./utils.js";

const envContainer = getElement(".aca-section-center");

function displayAcademicData(data) {
  const releaseData = `<div class="env-container">
        <article class="environment">
          <div class="env-header">
            <h5 class="env-name">Dev</h5>
            <h5 class="env-status">Dummy - Online</h5>
          </div>
          <div class="env-info">
            <div class="release">
              <p>ODAPI</p>
              <p>${data.Dev.version}</p>
            </div>   
        </article>            
        <article class="environment">
          <div class="env-header">
            <h5 class="env-name">Dev-Sandbox</h5>
            <h5 class="env-status">Dummy - Online</h5>
          </div>
          <div class="env-info">
            <div class="release">
              <p>ODAPI</p>
              <p>${data.DevSandbox.version}</p>
            </div>            
        </article>  
           
            </div>`;

  envContainer.innerHTML = releaseData;
}

export default displayAcademicData;
