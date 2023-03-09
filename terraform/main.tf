terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

provider "digitalocean" {}

resource "digitalocean_droplet" "disco-fever" {
  image     = "ubuntu-22-04-x64"
  name      = "disco-fever"
  region    = "tor1"
  size      = "s-1vcpu-1gb"
  user_data = file("disco-fever_app.yaml")
}
