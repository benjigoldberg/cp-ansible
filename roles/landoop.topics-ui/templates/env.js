var clusters = [
    {
      NAME: "dev",
      KAFKA_REST: "http://{{ hostvars[inventory_hostname]['ansible_env'].SSH_CONNECTION.split(' ')[2] }}:8082",
      MAX_BYTES: "50000",
      RECORD_POLL_TIMEOUT: "3000",
      DEBUG_LOGS_ENABLED: true,
      LAZY_LOAD_TOPIC_META: false
    }
  ];
