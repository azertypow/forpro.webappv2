<template>
  <header
          ref="headerMain"
          class="v-page-header fp-remove-margin-child"
  >
      <div
              ref="headerContainer"
              class="v-page-header__img"
              v-if="imageDataForProAPI"
              :style="{
                backgroundImage: `url(${imageDataForProAPI.resize.xxl})` || ''
              }"
              :class="{
                'is-home': isHome,
              }"
      >
<!--          <svg-->
<!--                  class="v-page-header__graphique-image v-page-header__graphique-image&#45;&#45;left"-->
<!--                  viewBox="0 0 4310.6665 1991.5146"-->
<!--                  xmlns="http://www.w3.org/2000/svg"-->
<!--                  ref="graphicToMove"-->
<!--          >-->
<!--              <g-->
<!--                      transform="matrix(1.3333333,0,0,-1.3333333,0,4000)"-->
<!--              >-->
<!--                  <path-->
<!--                          d="m 0,1623.1341 v 1260.096 c 0,84.069 38.732,116.77 122.24197,116.77 H 1703.679 c 149.938,-47.145 382.746,-214.095 519.991,-372.894 179.769,-207.998 377.718,-278.564 668.365,-278.564 H 3203 c 16.568,0 30,-13.431 30,-30 v -130.72 c 0,-16.569 -13.432,-30 -30,-30 h -310.965 c -199.5435,3.2233 -488.596,-70.566 -668.365,-278.564 -137.245,-158.799 -257.798,-372.894 -519.991,-372.894 H 122.24197 C 38.732,1506.3641 0,1539.0651 0,1623.1341"-->
<!--                          style="fill:#f500b4;fill-opacity:1;fill-rule:nonzero;stroke:none"-->
<!--                  />-->
<!--              </g>-->
<!--          </svg>-->


<!--          svg v2 longue tige-->
<!--          <svg-->
<!--                  id="Layer_2"-->
<!--                  class="v-page-header__graphique-image v-page-header__graphique-image&#45;&#45;left"-->
<!--                  data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1008.32481 372.06538">-->
<!--              <defs>-->
<!--                  <clipPath id="clippath">-->
<!--                      <rect width="1008.32481" height="372.06538" style="fill: none;"/>-->
<!--                  </clipPath>-->
<!--              </defs>-->
<!--              <g id="Layer_1-2" data-name="Layer 1">-->
<!--                  <g style="clip-path: url(#clippath);">-->
<!--                      <path-->
<!--                              d="m1008.32422,197.13461v-22.20205c0-6.99268-5.67041-12.66306-12.66306-12.66306l-67.73488.00893c-72.39868,0-121.70779-17.577-166.48716-69.38774C727.25005,53.33199,697.22143.00239,631.90778.00239H30.45094C9.64861.00239-.00059,8.14761-.00059,29.0899v313.88735c0,20.9423,9.6492,29.08752,30.45153,29.08752h601.45684c65.31366,0,95.34227-53.3296,129.53134-92.88828,44.77937-51.81075,94.08848-69.38776,166.48716-69.38776l62.133.00893h5.60188c6.99266,0,12.66306-5.67038,12.66306-12.66306" style="fill: #1754ff;"-->
<!--                      />-->
<!--                  </g>-->
<!--              </g>-->
<!--          </svg>-->
<!--          svg v2 longue tige-->

          <a
                  class="v-page-header__recruitment"
                  href="/recrutement"
                  v-if="useAppStateStore().activeRecruitmentPage"
          >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 152">
                  <g id="Forme" class="v-page-header__recruitment__background">
                      <path d="m3.63024,91.22281l8.195,23.8c9.591,27.853,39.054,42.965,65.806,33.753l60.66299-20.888c26.75301-9.211,40.666-39.259,31.075-67.111l-8.19499-23.80099C151.58423,9.12381,122.12124-5.98718,95.36824,3.22381l-60.661,20.888C7.95324,33.32381-5.95976,63.36981,3.63024,91.22281" style="fill: var(--fp-theme-color-makerlab-secondary);"/>
                  </g>
                  <g id="Texte">
                      <g>
                          <path d="m117.15042,102.7384c-2.42596,0-4.35999,1.90002-4.35999,4.46198,0,2.51105,1.93402,4.46204,4.35999,4.46204,2.409,0,4.36005-1.95099,4.36005-4.46204,0-2.56195-1.93402-4.46198-4.36005-4.46198Zm0,7.39697c-1.578,0-2.68097-1.25598-2.68097-2.95197,0-1.71399,1.086-2.901,2.68097-2.901,1.57703,0,2.68005,1.18701,2.68005,2.901,0,1.69598-1.12006,2.95197-2.68005,2.95197Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m58.82546,111.4414c0,.98401-.492,1.612-1.59503,1.612-.50897,0-.89899-.10199-1.23798-.18701v1.45898c.237.08502.797.23804,1.62799.23804,1.79901,0,2.81598-1.32404,2.81598-3.00299v-8.56702h-1.61096v8.448Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <rect x="73.05844" y="102.99237" width="1.612" height="8.48303" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m66.84945,102.7384c-2.42603,0-4.35999,1.90002-4.35999,4.46198,0,2.51105,1.93396,4.46204,4.35999,4.46204,2.409,0,4.35999-1.95099,4.35999-4.46204,0-2.56195-1.93402-4.46198-4.35999-4.46198Zm0,7.39697c-1.578,0-2.67999-1.25598-2.67999-2.95197,0-1.71399,1.08496-2.901,2.67999-2.901,1.578,0,2.68097,1.18701,2.68097,2.901,0,1.69598-1.12,2.95197-2.68097,2.95197Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m73.87246,99.39642c-.67804,0-1.20404.526-1.20404,1.17096,0,.67804.526,1.18701,1.20404,1.18701.64496,0,1.17096-.50897,1.17096-1.18701,0-.64496-.526-1.17096-1.17096-1.17096Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m54.77041,108.98138c-.49194.69598-1.25494,1.17102-2.23895,1.17102-1.44202,0-2.44299-1.06903-2.57904-2.32404h6.54803c.01697-.20398.034-.49194.034-.71295,0-2.39203-1.59399-4.37701-4.07098-4.37701-2.46002,0-4.19104,1.98499-4.20801,4.479-.01703,2.47699,1.67999,4.42798,4.22498,4.44501,1.66199,0,3.05298-.96704,3.68103-2.05304l-1.39105-.62799Zm-2.34094-4.716c1.37396,0,2.30695.95001,2.39197,2.13702h-4.88599c.20398-1.22101,1.20398-2.13702,2.49402-2.13702Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m59.63943,99.37939c-.67798,0-1.20398.526-1.20398,1.18799,0,.67804.526,1.20404,1.20398,1.20404.66199,0,1.18799-.526,1.18799-1.20404,0-.66199-.526-1.18799-1.18799-1.18799Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m46.72842,102.94238c0-2.45996-2.03497-3.57996-4.258-3.57996h-3.74896v12.11298h1.72998v-4.90302h1.54401l3.79999,4.90302h2.172l-4.021-5.14001c1.30701-.255,2.78198-1.47601,2.78198-3.39301Zm-6.27698,1.96802v-3.88501h2.07001c1.39099,0,2.44299.60999,2.44299,1.91699,0,1.40802-1.06903,1.96802-2.44299,1.96802h-2.07001Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m90.92245,106.52142l-.91602-.25403c-.797-.22101-1.54401-.40698-1.54401-1.06897,0-.56.59399-1.00104,1.39099-1.01801,1.13702,0,1.66302.61096,1.96802,1.18799l1.51001-.289c-.271-1.086-1.578-2.35803-3.427-2.341-1.74701.01697-3.07098,1.06897-3.07098,2.46002,0,1.54395,1.27295,2.06995,2.34198,2.35797l.98401.255c.89899.237,1.78101.45801,1.78101,1.255,0,.66199-.71301,1.12-1.71399,1.13696-1.13605,0-1.95105-.64496-2.25604-1.40796l-1.67896.32196c.37299,1.22101,1.76398,2.52802,3.91797,2.54504,1.69702.01697,3.34302-1.06903,3.34302-2.64703,0-1.56097-1.30701-2.12097-2.63-2.49396Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m107.76846,102.75537c-1.23804,0-2.05304.62805-2.47699,1.10303v-.86499h-1.61102v8.48199h1.61102v-4.86902c0-1.255.815-2.27301,2.08698-2.27301,1.255,0,2.01898.81403,2.01898,2.12v5.02203h1.61102v-5.59802c0-1.76495-1.44202-3.12201-3.23999-3.12201Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <rect x="95.19741" y="106.41937" width="5.97205" height="1.59503" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m81.47341,102.75537c-1.23895,0-2.05298.62805-2.47699,1.10303v-.86499h-1.612v8.48199h1.612v-4.86902c0-1.255.81403-2.27301,2.086-2.27301,1.25604,0,2.01904.81403,2.01904,2.12v5.02203h1.612v-5.59802c0-1.76495-1.44202-3.12201-3.24005-3.12201Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m128.77047,107.96338c0,1.086-.74603,2.12103-2.03601,2.12103-1.15302,0-1.849-.74701-1.849-2.05304v-5.03796h-1.62799v5.46198c0,1.83203,1.35699,3.19,3.06995,3.19,1.22205,0,2.00201-.62799,2.375-1.086h.06805v.91602h1.62897v-8.48199h-1.62897v4.96997Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m136.62545,106.52142l-.91602-.25403c-.79797-.22101-1.54401-.40698-1.54401-1.06897,0-.56.59399-1.00104,1.39099-1.01801,1.13702,0,1.66302.61096,1.96802,1.18799l1.51001-.289c-.271-1.086-1.578-2.35803-3.427-2.341-1.74701.01697-3.07098,1.06897-3.07098,2.46002,0,1.54395,1.27295,2.06995,2.34198,2.35797l.98297.255c.90002.237,1.78204.45801,1.78204,1.255,0,.66199-.71301,1.12-1.71399,1.13696-1.13605,0-1.95105-.64496-2.25604-1.40796l-1.67999.32196c.37402,1.22101,1.76501,2.52802,3.91901,2.54504,1.69702.01697,3.34198-1.06903,3.34198-2.64703,0-1.56097-1.30597-2.12097-2.62897-2.49396Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m42.02987,69.62768v-4.24097c-2.71405,0-4.94806,1.159-5.65503,2.12097v-1.92297h-4.354v14.703h4.354v-6.758c0-1.66803.62201-2.71405,1.49902-3.28003.98999-.65002,2.573-.82001,4.15601-.62201Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <polygon points="142.51785 73.72772 143.56387 63.26568 143.56387 60.09967 139.12484 60.09967 139.12484 63.26568 140.17086 73.72772 142.51785 73.72772" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m50.60482,80.68371c2.71399,0,5.117-1.47003,6.44604-3.53503l-3.36401-1.58301c-.70703.84802-1.66901,1.38605-3.026,1.38605-1.72504,0-3.05304-1.07501-3.25104-2.46002h10.15002c.05701-.34003.08502-1.01801.08502-1.52698,0-4.12805-2.82703-7.55005-7.125-7.55005-4.21301,0-7.43604,3.39301-7.43604,7.578,0,4.77905,3.61902,7.69104,7.521,7.69104Zm-.05701-11.59302c1.75305,0,2.79901,1.13098,2.99701,2.34698h-6.21997c.22601-1.18799,1.35699-2.34698,3.22296-2.34698Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m124.80386,65.41467c-4.21301,0-7.43701,3.39301-7.43701,7.578,0,4.77905,3.62,7.69104,7.52197,7.69104,2.71405,0,5.117-1.47003,6.44604-3.53503l-3.36401-1.58301c-.70703.84802-1.66901,1.38605-3.026,1.38605-1.72504,0-3.05402-1.07501-3.25104-2.46002h10.15002c.05701-.34003.08502-1.01801.08502-1.52698,0-4.12805-2.82703-7.55005-7.125-7.55005Zm-3.19501,6.02301c.22601-1.18799,1.35699-2.34698,3.22296-2.34698,1.75305,0,2.79901,1.13098,2.99701,2.34698h-6.21997Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m70.26187,75.28271c-.73505.93298-1.66803,1.66901-3.11005,1.66901-2.00696,0-3.56299-1.47101-3.56299-3.93103,0-2.43097,1.69702-3.87299,3.56299-3.87299,1.27203,0,2.26202.67798,2.88403,1.75299l3.36499-1.55499c-1.04602-2.20599-3.39301-3.93103-6.33398-3.93103-4.26904,0-7.60602,3.30902-7.60602,7.55005,0,4.83496,3.64801,7.71899,7.69098,7.71899,2.65802,0,5.146-1.52704,6.47504-3.789l-3.36499-1.612Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m115.63583,76.64068c-.28296.08398-1.10297.22601-1.81.22601-1.55499,0-2.26196-.73499-2.26196-2.26202v-5.25897h3.81696v-3.53503h-3.81696v-3.92999h-4.354v3.92999h-2.94104v3.53503h2.94104v6.27698c0,2.91199,2.14899,5.08899,5.11798,5.08899,1.83698,0,2.88397-.36694,3.30798-.53699v-3.534Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m97.81582,73.47369c0,2.03601-.98999,3.42102-2.771,3.42102-1.72498,0-2.573-1.216-2.573-3.16699v-8.14301h-4.35498v9.21796c0,3.50604,2.34698,5.909,5.68402,5.909,1.89398,0,3.22296-.961,3.81696-1.63995h.198v1.216h4.354v-14.703h-4.354v7.88898Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m80.22183,67.50769v-1.92297h-4.35498v14.703h4.35498v-6.758c0-1.66803.62201-2.71405,1.49799-3.28003.99005-.65002,2.573-.82001,4.15704-.62201v-4.24097c-2.71503,0-4.948,1.159-5.65503,2.12097Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m141.32986,75.48071c-1.38501,0-2.51599,1.10297-2.51599,2.51697,0,1.38501,1.13098,2.51599,2.51599,2.51599,1.414,0,2.51599-1.13098,2.51599-2.51599,0-1.414-1.10199-2.51697-2.51599-2.51697Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m126.31704,56.93237c3.92999,0,7.60602-2.88397,7.60602-7.71899,0-4.24097-3.33704-7.578-7.60602-7.578-4.24103,0-7.60602,3.33704-7.60602,7.578,0,4.83502,3.70404,7.71899,7.60602,7.71899Zm0-11.59296c1.86603,0,3.56299,1.44196,3.56299,3.87396,0,2.46002-1.55597,4.01501-3.56299,4.01501-2.008,0-3.56299-1.55499-3.56299-4.01501,0-2.43201,1.69696-3.87396,3.56299-3.87396Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m111.98104,49.77942c0-1.66901.62201-2.71503,1.49902-3.28003.98999-.651,2.573-.82001,4.15601-.62201v-4.242c-2.71405,0-4.94806,1.16003-5.65503,2.12103v-1.92303h-4.354v14.703h4.354v-6.75696Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <polygon points="48.84304 48.50641 57.80606 48.50641 57.80606 44.06738 48.84304 44.06738 48.84304 40.78741 58.42806 40.78741 58.42806 36.34839 44.40402 36.34839 44.40402 56.53637 48.84304 56.53637 48.84304 48.50641" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m67.44802,41.63537c-4.24097,0-7.60596,3.33704-7.60596,7.578,0,4.83502,3.70398,7.71899,7.60596,7.71899,3.93103,0,7.60602-2.88397,7.60602-7.71899,0-4.24097-3.336-7.578-7.60602-7.578Zm0,11.59302c-2.00696,0-3.56201-1.55499-3.56201-4.01501,0-2.43201,1.69604-3.87396,3.56201-3.87396s3.56299,1.44196,3.56299,3.87396c0,2.46002-1.55499,4.01501-3.56299,4.01501Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m81.89706,49.77942c0-1.66901.62201-2.71503,1.49896-3.28003.98901-.651,2.573-.82001,4.15601-.62201v-4.242c-2.71399,0-4.948,1.16003-5.65497,2.12103v-1.92303h-4.354v14.703h4.354v-6.75696Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                          <path d="m97.36306,36.34839h-6.98401v20.18799h4.44v-6.55896h2.79901c4.32599,0,7.60596-2.79999,7.60596-6.815,0-4.60901-3.591-6.81403-7.86096-6.81403Zm.14197,9.41602h-2.68597v-5.03302h2.68597c2.06403,0,3.336.93304,3.336,2.48804,0,1.44196-1.27197,2.54498-3.336,2.54498Z" style="fill: var(--fp-theme-color-makerlab-main);"/>
                      </g>
                  </g>
              </svg>
          </a>

          <svg
                  id="Layer_2"
                  data-name="Layer 2"
                  class="v-page-header__graphique-image v-page-header__graphique-image--left v-page-header__graphique-image--left--desktop"
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 988.3234 372.06538">
              <defs>
                  <clipPath id="clippath">
                      <rect x=".00059" width="988.32281" height="372.06538" style="fill: none;"/>
                  </clipPath>
              </defs>
              <g id="Layer_1-2" data-name="Layer 1">
                  <g style="clip-path: url(#clippath);">
                      <path d="m988.32281,197.13461v-22.20205c0-6.99268-5.67041-12.66306-12.66306-12.66306l-47.73288.00893c-72.39868,0-121.70779-17.577-166.48716-69.38774C727.25064,53.33199,697.22202.00239,631.90837.00239H30.45153C9.6492.00239,0,8.14761,0,29.0899v313.88735c0,20.9423,9.6492,29.08752,30.45153,29.08752h601.45684c65.31366,0,95.34227-53.3296,129.53134-92.88828,44.77937-51.81075,94.08848-69.38776,166.48716-69.38776l47.73288.00893c6.99266,0,12.66306-5.67038,12.66306-12.66306" style="fill: #1754ff;"/>
                  </g>
              </g>
          </svg>

          <svg id="Layer_2"
               data-name="Layer 2"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 290.70082 360.02124"
               class="v-page-header__graphique-image v-page-header__graphique-image--left v-page-header__graphique-image--left--mobile"
          >
              <g id="Layer_1-2" data-name="Layer 1">
                  <path d="m278.03773,141.245l-37.73189.00897c-61.43823,0-101.70581-2.5755-146.48517-54.38629C66.56488,55.33124,41.95282,15.04352,0,0v360.02124c41.95282-15.04352,66.56488-55.33124,93.82068-86.86774,44.77936-51.81073,85.04694-54.38623,146.48517-54.38623l32.12996.00891h5.60193c6.99268,0,12.66309-5.67035,12.66309-12.66302v-52.20508c0-6.99268-5.67041-12.66309-12.66309-12.66309Z" style="fill: #1754ff;"/>
              </g>
          </svg>


<!--          <svg-->
<!--                  class="v-page-header__graphique-image v-page-header__graphique-image&#45;&#45;right"-->
<!--                  viewBox="0 0 4310.6665 1991.5146"-->
<!--                  xmlns="http://www.w3.org/2000/svg"-->
<!--                  ref="graphicToMove"-->
<!--          >-->
<!--              <g-->
<!--                      transform="matrix(1.3333333,0,0,-1.3333333,0,4000)"-->
<!--              >-->
<!--                  <path-->
<!--                          d="m 0,1623.1341 v 1260.096 c 0,84.069 38.732,116.77 122.24197,116.77 H 1703.679 c 149.938,-47.145 382.746,-214.095 519.991,-372.894 179.769,-207.998 377.718,-278.564 668.365,-278.564 H 3203 c 16.568,0 30,-13.431 30,-30 v -130.72 c 0,-16.569 -13.432,-30 -30,-30 h -310.965 c -199.5435,3.2233 -488.596,-70.566 -668.365,-278.564 -137.245,-158.799 -257.798,-372.894 -519.991,-372.894 H 122.24197 C 38.732,1506.3641 0,1539.0651 0,1623.1341"-->
<!--                          style="fill:#f500b4;fill-opacity:1;fill-rule:nonzero;stroke:none"-->
<!--                  />-->
<!--              </g>-->
<!--          </svg>-->

      </div>
      <div
              class="v-page-header__title fp-grid-with-gutter fp-remove-margin-child"
      >
        <h1>{{pageTitle}}</h1>
      </div>
  </header>
</template>

<script lang="ts" setup >

import {onMounted} from "#imports"
import {PropType, Ref} from "vue"
import {useAppStateStore} from "~/stores/appState"
import nuxtConfig from "~/nuxt.config"
import {IForPro_image} from "~/global/forProApi"

defineProps({
    pageTitle: {
        type: String,
        required: true,
    },
    imageDataForProAPI: {
        type: Object as PropType<IForPro_image>,
        required: false,
    },
  isHome: {
      type: Boolean,
      required: false,
      default: false,
  }
})

const headerMain: Ref<null | HTMLElement> = ref(null)
const headerContainer: Ref<null | HTMLElement> = ref(null)

const baseURL = useRuntimeConfig().app.baseURL

onMounted(() => {

  nextTick(() => {
    if( ! (headerContainer.value instanceof HTMLElement) ) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(value => {
        useAppStateStore().isIntersecting = value.isIntersecting
      })
    })
    observer.observe(headerContainer.value)
  })

  window.addEventListener('scroll', onScrollCallback)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScrollCallback)
})

const onScrollCallback = () => {
  if( ! (headerMain.value instanceof HTMLElement) ) return

  const nodeListOfHeaderGraphicImage = document.querySelectorAll('.v-page-header__graphique-image')

    nodeListOfHeaderGraphicImage.forEach((headerGraphicImage: Element) => {
            if( ! (headerGraphicImage instanceof SVGElement) ) return

            const YTranslation = map(
                headerMain.value!.getBoundingClientRect().height + headerMain.value!.getBoundingClientRect().top,
                0,
                headerMain.value!.getBoundingClientRect().height,
                0,
                100,
            )

            headerGraphicImage.style.setProperty('--scroll-percent', (YTranslation / 100).toString())
        }
    )
}

const map = (
  value: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => (value - x1) * (y2 - x2) / (y1 - x1) + x2

</script>

<style lang="scss" scoped>

@use "assets/_scss-params";

.v-page-header {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .v-app--is-dark & {
    background: var(--fp-color-black);
  }
}

.v-page-header__recruitment {
  display: block;
  user-select: none;
  position: absolute;
  z-index: 100;
  left: auto;
  right:  calc(100% / 12 * 1);
  top:    calc(100% / 3 * 1);

  svg {
    display: block;
    width: 10rem;
  }

  transition: transform 1s cubic-bezier(.42, 0, 0, 1);
  transform: rotate(0deg);

  &:hover {
    transform: rotate(-5deg);
  }

  @media (max-width: scss-params.$fp-breakpoint-xs) {
    right:  calc(100% / 12 * 1);
    top:    calc(100% / 3 * 2);

    svg {
      width: 5rem;
    }
  }

  .v-page-header__recruitment__background {
    z-index: -1;
    transition: transform 1s cubic-bezier(.42, 0, 0, 1);
    transform: rotate(0deg);
    transform-origin: center center;
  }
  .v-page-header__recruitment__background:hover {
    transform: rotate(10deg);
  }
}

.v-page-header__img {
  width: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  height: 50vh;

  @media (min-width: scss-params.$fp-breakpoint-sm) {
    height: 100vh;
  }
}

.v-page-header__title {
  position: relative;
  padding-top:    6rem;
  padding-bottom: 1rem;
  text-align: center;
  color: var(--fp-theme-color-main);

  @media (min-width: scss-params.$fp-breakpoint-xs) {
    padding-top: 3rem;
  }
}

.v-page-header__graphique-image {
  --scroll-percent: 100;

  display: block;
  position: absolute;

  path {
    fill: var(--fp-theme-color-secondary) !important;
  }

  &.v-page-header__graphique-image--left {
    height: 100vh;
    bottom: -100%;
    right: 50%;

    // animation
    animation: header-animation--left 1s ease-in-out infinite;
    animation-delay: calc(var(--scroll-percent) * -1s);
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-play-state: paused;
    //animation-iteration-count: infinite;
    //animation-play-state: running;

    @media (min-width: scss-params.$fp-breakpoint-xs) {
      height: 100vh;
      bottom: -100%;
      right: 50%;
    }

    @media (min-width: scss-params.$fp-breakpoint-sm) {
      height: 100vh;
      bottom: -50%;
      right: 50%;
    }
  }

  &.v-page-header__graphique-image--right {
    height: 100vh;
    bottom: -50%;
    left: 100%;

    // animation
    animation: header-animation--right 1s ease-in-out infinite;
    animation-delay: calc(var(--scroll-percent) * -1s);
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-play-state: paused;
    //animation-iteration-count: infinite;
    //animation-play-state: running;
  }
}


.v-page-header__graphique-image--left--desktop {
  display: none;

  @media (min-width: scss-params.$fp-breakpoint-sm) {
    display: block;
  }
}

.v-page-header__graphique-image--left--mobile {
  display: block;
  left: 0;
  height: 40vh !important;
  bottom: -40% !important;
  max-width: 80vw;
  animation: none !important;

  @media (min-width: scss-params.$fp-breakpoint-sm) {
    display: none;
  }
}

@keyframes header-animation--left {
  0% {
    transform: translate(0rem, 15vh) rotate(-10deg);
  }

  25% {
    transform: translate(0, -8vh) rotate(0);
  }

  50% {
    transform: translate(0, -4vh) rotate(0);
  }

  100% {
    transform: translate(0, 6.4vh) rotate(0deg);
  }
}

@keyframes header-animation--right {
  0% {
      transform: translate(-5vw, 75vh) rotate(20deg);
  }

  50% {
    transform: translate(-10vw, 100vh) rotate(15deg);
  }

  100% {
    transform: translate(2.5%, 0) rotate(0deg);
  }
}











.v-page-header__home {
    position: relative;
    height: 100%;
}
.v-page-header__home__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75vw;

    .cls-1 {
        fill: #3df069;
    }
    .cls-2 {
        fill: #1754ff;
    }
}

</style>
