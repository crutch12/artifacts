function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.inno.local") || shExpMatch(host, "*.innodev.local") ||  shExpMatch(host, "mail.inno.tech")) {
    // Use the WSL proxy (replace WSL_IP and port with your WSL IP and proxy port)
    return "PROXY inno-proxy:3128"; // WSL IP and Squid port
  }

  return "DIRECT";
}
