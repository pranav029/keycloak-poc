FROM quay.io/keycloak/keycloak:latest

WORKDIR /opt/keycloak

ENV KC_DB=postgres

# Build (optimize Keycloak with postgres driver)
RUN /opt/keycloak/bin/kc.sh build

# Start in optimized mode
ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
CMD ["start", "--optimized", "--cache=local"]