// app/javascript/controllers/notification_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["container"]

  connect() {
    setTimeout(() => {
      this.close();
    }, 3000);
  }

  close() {
    this.containerTarget.remove();
  }
}
