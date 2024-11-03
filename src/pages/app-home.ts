import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'संकल्प!';

  static styles = [
    styles,
    css`
    #welcomeBar {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    #welcomeCard,
    #infoCard {
      padding: 18px;
      padding-top: 0px;
    }

    sl-card::part(footer) {
      display: flex;
      justify-content: flex-end;
    }

    @media(min-width: 750px) {
      sl-card {
        width: 70vw;
      }
    }


    @media (horizontal-viewport-segments: 2) {
      #welcomeBar {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }

      #welcomeCard {
        margin-right: 64px;
      }
    }
  `];

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2 style="text-align: center;">${this.message}</h2>
            </div>
            <pre id="mainInfo" style="text-align: center;">
              प्रारंभ काल सुमूहुर्तमस्तु स्तुति ब्रुवन्तु ब्रुवन्तु प्रारंभ काल सुमूहुर्तमस्तु। विष्णुविष्णुविष्णुः राज्ञयाः
              प्रवर्तमानस्य अद्यब्रह्मणः द्विपरार्धे श्रीहरेः श्वेतवराह कल्पे वैवस्वतमन्वन्तरे कलियुगे प्रथमपादे
              जम्बूद्विपे भरतखंडे भारतवर्षे महामेरोः पश्चिम दिग्भागे
              दक्षिण पार्श्वे
              श्रीमद् विश्वामित्री तीरे
              बौधावतारे राम क्षेत्रे
              गुजरातप्रदेशे वडोदरा पुण्य क्षेत्रे

              Krodhi नामसमवत्सरे
              Dakshinayana आयने
              Sharad ऋतौ
              Bhadrapad मासे
              Shukla पक्षे वासर वासरस्तु
              Induvasare वासरे युक्तयां
              Purva Ashaadh नक्षत्र युक्तयाम
              Shubh योग युक्तयाम
              Shubh करण युक्तयाम
              एवं गुणविशेषेण विशिष्टायां
              अस्यां dwadashi शुभ तिथौ

              ।। संकल्प ।।
            </pre>
          </sl-card>
        </div>
      </main>
    `;
  }
}
