import {Component, Prop, h, getAssetPath} from '@stencil/core';

@Component({
  tag: 'stackit-badge',
  styleUrl: 'stackit-badge.css',
  assetsDirs: ['../assets']
})
export class STACKITBadgeComponent {

  /**
   * To use cd instead local assets
   */
  @Prop() readonly cdn: boolean = true;

  /**
   * To use runs-on-stackit-badge or
   * runson = Runs On badge
   * poweredby = Powered By color badge
   */
  @Prop() readonly badgeType: 'badge' | 'ribbon' | 'flag' = 'badge';

  /**
   * To use runs-on or powered-by badge
   * runson = Runs On badge
   * poweredby = Powered By color badge
   */
  @Prop() readonly hostingType: 'runson' | 'poweredby' = 'runson';

  /**
   * Define which badge color to use.
   * yellow = yellow color badge
   * petrol = petrol color badge
   */
  @Prop() readonly badgeColor: 'petrol' | 'white' | 'yellow' = 'petrol';

  private getBadgeType() {
    switch (this.badgeType) {
      case 'badge':
        return 'Badge'
      case 'ribbon':
        return 'Ribbon'
      case 'flag':
        return 'Flag'
      default:
        return 'Petrol'
    }
  }

  private getBadgeColorScheme() {
    switch (this.badgeColor) {
      case 'petrol':
        return 'Petrol'
      case 'yellow':
        return 'Yellow'
      case 'white':
        return this.badgeType === 'ribbon' ? 'White' : 'Petrol'
      default:
        return 'Petrol'
    }
  }

  private getHostType() {
    console.log(this.hostingType)
    switch (this.hostingType) {
      case 'runson':
        return 'Runs-On'
      case 'poweredby':
        return this.badgeType === 'badge' ? 'Powered-By' : 'Runs-On'
      default:
        return 'Runs-On'
    }
  }

  private getSrc() {
    return this.cdn ? 'https://cdn.apps.eu01.cloud.schwarz/assets/img/' + this.getHostType() + '-STACKIT-' + this.getBadgeType() + '-' + this.getBadgeColorScheme() + '.svg' :
      getAssetPath('../assets/stackit-' + this.badgeType + '/' + this.getHostType() + '-STACKIT-' + this.getBadgeType() + '-' + this.getBadgeColorScheme() + '.svg')
  }

  render() {
    return (
      <a href="https://stackit.de" title="STACKIT">
        <img width={this.badgeType === 'badge' ? "200" : "96"} src={this.getSrc()}/>
      </a>
    );
  }
}
