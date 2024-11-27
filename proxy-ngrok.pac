function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.inno.local") || shExpMatch(host, "*.innodev.local")) {
    // Use the WSL proxy (replace WSL_IP and port with your WSL IP and proxy port)
    return "PROXY cffa-95-24-80-25.ngrok-free.app:443"; // WSL IP and Squid port
  }

  return "DIRECT";
}
