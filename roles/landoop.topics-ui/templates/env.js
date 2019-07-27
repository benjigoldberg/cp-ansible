var clusters = [
    {
      NAME: "dev",
      KAFKA_REST: "http://{{ ansible_default_ipv4.address }}:8082",
      MAX_BYTES: "50000",
      RECORD_POLL_TIMEOUT: "3000",
      DEBUG_LOGS_ENABLED: true,
      LAZY_LOAD_TOPIC_META: false
    }
  ];
