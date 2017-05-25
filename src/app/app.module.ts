import { ApplicationRef, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { createInputTransfer, createNewHosts, removeNgStyles } from '@angularclass/hmr'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NormalPageComponent } from './normal-page/normal-page.component'
import { Store, StoreModule } from '@ngrx/store'
import { AppState, rootReducer } from './reducers'
import { RouterStoreModule } from '@ngrx/router-store'

@NgModule({
  declarations: [
    AppComponent,
    NormalPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterStoreModule.connectRouter(),
    StoreModule.provideStore(rootReducer),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    public appRef: ApplicationRef,
    private _store: Store<AppState>
  ) {}

  hmrOnInit(store) {
    if (!store || !store.rootState) {
      return
    }
    // restore state by dispatch a SET_ROOT_STATE action
    if (store.rootState) {
      this._store.dispatch({
        type: 'SET_ROOT_STATE',
        payload: store.rootState
      })
    }

    if ('restoreInputValues' in store) {
      store.restoreInputValues()
    }
    this.appRef.tick()
    Object.keys(store).forEach(prop => delete store[prop])
  }

  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement)
    this._store.take(1).subscribe(s => store.rootState = s)
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation)
    // save input values
    store.restoreInputValues = createInputTransfer()
    // remove styles
    removeNgStyles()
  }

  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts()
    delete store.disposeOldHosts
    // anything you need done the component is removed
  }
}
