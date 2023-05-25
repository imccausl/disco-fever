terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

variable "do_token" {}

provider "digitalocean" {
  token = var.do_token
}

data "digitalocean_ssh_key" "disco-fever" {
  name = "disco-fever"
}

resource "digitalocean_droplet" "disco-fever" {
  image  = "ubuntu-22-04-x64"
  name   = "disco-fever"
  region = "tor1"
  size   = "s-1vcpu-1gb"
  ssh_keys = [
    data.digitalocean_ssh_key.disco-fever.id
  ]
  user_data = file("disco-fever_app.yaml")
}

resource "digitalocean_domain" "disco-fever" {
  name       = "app.discofever.net"
  ip_address = digitalocean_droplet.disco-fever.ipv4_address
}
