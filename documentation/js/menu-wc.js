'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs_compodoc_test documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AaaModule.html" data-type="entity-link" >AaaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AaaModule-8da9b6e9a60df600213a49d151663fa2e5839a422d3d728c23e64dad153dbfe05631dc7fc71a3ed303a3c7c0b3391bbf553541ea2965d4bc291aff6d2426bd1d"' : 'data-bs-target="#xs-controllers-links-module-AaaModule-8da9b6e9a60df600213a49d151663fa2e5839a422d3d728c23e64dad153dbfe05631dc7fc71a3ed303a3c7c0b3391bbf553541ea2965d4bc291aff6d2426bd1d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AaaModule-8da9b6e9a60df600213a49d151663fa2e5839a422d3d728c23e64dad153dbfe05631dc7fc71a3ed303a3c7c0b3391bbf553541ea2965d4bc291aff6d2426bd1d"' :
                                            'id="xs-controllers-links-module-AaaModule-8da9b6e9a60df600213a49d151663fa2e5839a422d3d728c23e64dad153dbfe05631dc7fc71a3ed303a3c7c0b3391bbf553541ea2965d4bc291aff6d2426bd1d"' }>
                                            <li class="link">
                                                <a href="controllers/AaaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AaaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AaaModule-8da9b6e9a60df600213a49d151663fa2e5839a422d3d728c23e64dad153dbfe05631dc7fc71a3ed303a3c7c0b3391bbf553541ea2965d4bc291aff6d2426bd1d"' : 'data-bs-target="#xs-injectables-links-module-AaaModule-8da9b6e9a60df600213a49d151663fa2e5839a422d3d728c23e64dad153dbfe05631dc7fc71a3ed303a3c7c0b3391bbf553541ea2965d4bc291aff6d2426bd1d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AaaModule-8da9b6e9a60df600213a49d151663fa2e5839a422d3d728c23e64dad153dbfe05631dc7fc71a3ed303a3c7c0b3391bbf553541ea2965d4bc291aff6d2426bd1d"' :
                                        'id="xs-injectables-links-module-AaaModule-8da9b6e9a60df600213a49d151663fa2e5839a422d3d728c23e64dad153dbfe05631dc7fc71a3ed303a3c7c0b3391bbf553541ea2965d4bc291aff6d2426bd1d"' }>
                                        <li class="link">
                                            <a href="injectables/AaaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AaaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-12e03a9f5f1382c2ab372f604376c4dbd05d609b1c379e100db92206552a16787de2568ee394a6c6354aeb7da1a539029c43d82b42d52d4c614a7f74eb6e2524"' : 'data-bs-target="#xs-controllers-links-module-AppModule-12e03a9f5f1382c2ab372f604376c4dbd05d609b1c379e100db92206552a16787de2568ee394a6c6354aeb7da1a539029c43d82b42d52d4c614a7f74eb6e2524"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-12e03a9f5f1382c2ab372f604376c4dbd05d609b1c379e100db92206552a16787de2568ee394a6c6354aeb7da1a539029c43d82b42d52d4c614a7f74eb6e2524"' :
                                            'id="xs-controllers-links-module-AppModule-12e03a9f5f1382c2ab372f604376c4dbd05d609b1c379e100db92206552a16787de2568ee394a6c6354aeb7da1a539029c43d82b42d52d4c614a7f74eb6e2524"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-12e03a9f5f1382c2ab372f604376c4dbd05d609b1c379e100db92206552a16787de2568ee394a6c6354aeb7da1a539029c43d82b42d52d4c614a7f74eb6e2524"' : 'data-bs-target="#xs-injectables-links-module-AppModule-12e03a9f5f1382c2ab372f604376c4dbd05d609b1c379e100db92206552a16787de2568ee394a6c6354aeb7da1a539029c43d82b42d52d4c614a7f74eb6e2524"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-12e03a9f5f1382c2ab372f604376c4dbd05d609b1c379e100db92206552a16787de2568ee394a6c6354aeb7da1a539029c43d82b42d52d4c614a7f74eb6e2524"' :
                                        'id="xs-injectables-links-module-AppModule-12e03a9f5f1382c2ab372f604376c4dbd05d609b1c379e100db92206552a16787de2568ee394a6c6354aeb7da1a539029c43d82b42d52d4c614a7f74eb6e2524"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BbbModule.html" data-type="entity-link" >BbbModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BbbModule-8e88fbb22c604cf06370243523e4c3d1a698379ad181506fb610ba86f792b18d1e787f674a64bc8a9d6698d0cbb0ef7db4dd165e52a543acb909530fd2a0c18a"' : 'data-bs-target="#xs-controllers-links-module-BbbModule-8e88fbb22c604cf06370243523e4c3d1a698379ad181506fb610ba86f792b18d1e787f674a64bc8a9d6698d0cbb0ef7db4dd165e52a543acb909530fd2a0c18a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BbbModule-8e88fbb22c604cf06370243523e4c3d1a698379ad181506fb610ba86f792b18d1e787f674a64bc8a9d6698d0cbb0ef7db4dd165e52a543acb909530fd2a0c18a"' :
                                            'id="xs-controllers-links-module-BbbModule-8e88fbb22c604cf06370243523e4c3d1a698379ad181506fb610ba86f792b18d1e787f674a64bc8a9d6698d0cbb0ef7db4dd165e52a543acb909530fd2a0c18a"' }>
                                            <li class="link">
                                                <a href="controllers/BbbController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BbbController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BbbModule-8e88fbb22c604cf06370243523e4c3d1a698379ad181506fb610ba86f792b18d1e787f674a64bc8a9d6698d0cbb0ef7db4dd165e52a543acb909530fd2a0c18a"' : 'data-bs-target="#xs-injectables-links-module-BbbModule-8e88fbb22c604cf06370243523e4c3d1a698379ad181506fb610ba86f792b18d1e787f674a64bc8a9d6698d0cbb0ef7db4dd165e52a543acb909530fd2a0c18a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BbbModule-8e88fbb22c604cf06370243523e4c3d1a698379ad181506fb610ba86f792b18d1e787f674a64bc8a9d6698d0cbb0ef7db4dd165e52a543acb909530fd2a0c18a"' :
                                        'id="xs-injectables-links-module-BbbModule-8e88fbb22c604cf06370243523e4c3d1a698379ad181506fb610ba86f792b18d1e787f674a64bc8a9d6698d0cbb0ef7db4dd165e52a543acb909530fd2a0c18a"' }>
                                        <li class="link">
                                            <a href="injectables/BbbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BbbService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Aaa.html" data-type="entity-link" >Aaa</a>
                            </li>
                            <li class="link">
                                <a href="classes/Bbb.html" data-type="entity-link" >Bbb</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAaaDto.html" data-type="entity-link" >CreateAaaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBbbDto.html" data-type="entity-link" >CreateBbbDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAaaDto.html" data-type="entity-link" >UpdateAaaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBbbDto.html" data-type="entity-link" >UpdateBbbDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});