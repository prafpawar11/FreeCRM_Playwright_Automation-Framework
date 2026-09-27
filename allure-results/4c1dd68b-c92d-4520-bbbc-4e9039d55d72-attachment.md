# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TestAlert.spec.js >> Test Alert code
- Location: tests\TestAlert.spec.js:4:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'once')
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]: Forms
      - generic [ref=e37]:
        - generic [ref=e38] [cursor=pointer]: Alerts, Frame & Windows
        - list [ref=e50]:
          - listitem [ref=e51] [cursor=pointer]:
            - link "Browser Windows" [ref=e52]:
              - /url: /browser-windows
          - listitem [ref=e55] [cursor=pointer]:
            - link "Alerts" [ref=e56]:
              - /url: /alerts
          - listitem [ref=e59] [cursor=pointer]:
            - link "Frames" [ref=e60]:
              - /url: /frames
          - listitem [ref=e63] [cursor=pointer]:
            - link "Nested Frames" [ref=e64]:
              - /url: /nestedframes
          - listitem [ref=e67] [cursor=pointer]:
            - link "Modal Dialogs" [ref=e68]:
              - /url: /modal-dialogs
      - generic [ref=e71]: Widgets
      - generic [ref=e84]: Interactions
      - generic [ref=e96]: Book Store Application
    - generic [ref=e108]:
      - generic [ref=e109]:
        - heading "Alerts" [level=1] [ref=e110]
        - generic [ref=e111]:
          - generic [ref=e112]: Click Button to see alert
          - button "Click me" [ref=e114] [cursor=pointer]
        - generic [ref=e115]:
          - generic [ref=e116]: On button click, alert will appear after 5 seconds
          - button "Click me" [ref=e118] [cursor=pointer]
        - generic [ref=e119]:
          - generic [ref=e120]:
            - text: On button click, confirm box will appear
            - generic [ref=e121]: You selected Cancel
          - button "Click me" [active] [ref=e123] [cursor=pointer]
        - generic [ref=e124]:
          - generic [ref=e125]: On button click, prompt box will appear
          - button "Click me" [ref=e127] [cursor=pointer]
      - iframe [ref=e131]:
        - generic [ref=f8e1]:
          - generic [ref=f8e3]:
            - generic [ref=f8e4]:
              - link [ref=f8e5] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CZTl77iyuao2vJfWMk7QPgsf8UP-vteCJAa2o9ZX4FbWQHxABIMb71nlg5ermg7wOoAHpzKuZKsgBCeACAKgDAcgDCqoE_gFP0N4JJ6OmYk24rK4PP9YaZRkgfV6K1ExbP7fHYZUCmBsdXaxM4RDFRdngduTzY4lwe92tuCoaczwK_O32JWiJj1a7YT0pPjql3mSETfcTZC-JN38pr1J_HPC1Brou659XLDjfJcorq_xaaYdNpGNOhhAY1Y5NoU7n_uNlQ755Pv3LuQXHrriRKDEW1kSJeEsMNbhOwgWd4vDHbm-pHlD6mHHlZ-0V2UnO2LXuWrrKIf2srT4h-tiegcFQn7DI9bLKgJeZvuNXYeONhtV3x2wR0oHh0Er0CaOmAETKlKQi3hKHBgedCGPeilnlaka3ogrUojO9PtA1GGVleY702sAEyNylttcF4AQBiAWG05KkWKAGLoAH6YT8-ASoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYoJbGqIP6lgNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJACjduYhhnl2ACgOYCwHICwGADAGiDAOQAQGqDQJJTsgNAeINEwjPw8aog_qWAxV1xoQAHYIjHwrqDRMIp5LHqIP6lgMVdcaEAB2CIx8K8A0CiA7___________8BuBPkA9gTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjYxNjg1NzY1MDVQBroXAjgBqhgXCQAAAADUDxNBEgo2MTY4NTc2NTA1GAGyGAkSArtQGC4iAQDQGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIjd7vqIP6lgMVdcaEAB2CIx8KEAEYASAAEgJQ8fD_BwE&num=1&cid=CAQShwIAQM4h3ISZq1vt27wmqyNckS6J6_uKNfdfdrK-1fuOYKEcB62SH0hp-Fo_gRiUcFKoiMEyFMpuRzHrl93aJucs8sd-MPJ-QjUx72Himple1A7vlilXDRpabNtCATT1j1GvZjqKBiRo1tRu97FcJ4br5_RYbFBXp09W5W6H0OVoNtkp3p8CforzQkEX1bIQPHF54Ew0yCjt6UKE4PvtNj4G8zckamd6_5PpAEPevgYyUpb19Yz6IdspN5qgGA-k0Rtlr1g972zCDV_yl91MDmQoWML1_-E9o2RRzkE5-5J1ARQaZeSBA1R0M7ENkXN7Yv9kPhXkRaclfNkFMTArUv0dd9IG9R3jvxgB&sig=AOD64_3YKWH5OIK92uGYBcnPws5Nk6CyNQ&client=ca-pub-4573231550355221&rf=4&nb=9&adurl=https://campaigns.hidglobal.com/identities%3Futm_source%3Dgdn%26utm_medium%3Dcpm%26utm_campaign%3Dhid_pacs_banners%26utm_content%3D26428_rotl%26gad_source%3D5%26gad_campaignid%3D23698123142%26gclid%3DEAIaIQobChMIjd7vqIP6lgMVdcaEAB2CIx8KEAEYASAAEgJQ8fD_BwE
              - link "Built Around Identity" [ref=f8e9] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CZTl77iyuao2vJfWMk7QPgsf8UP-vteCJAa2o9ZX4FbWQHxABIMb71nlg5ermg7wOoAHpzKuZKsgBCeACAKgDAcgDCqoE_gFP0N4JJ6OmYk24rK4PP9YaZRkgfV6K1ExbP7fHYZUCmBsdXaxM4RDFRdngduTzY4lwe92tuCoaczwK_O32JWiJj1a7YT0pPjql3mSETfcTZC-JN38pr1J_HPC1Brou659XLDjfJcorq_xaaYdNpGNOhhAY1Y5NoU7n_uNlQ755Pv3LuQXHrriRKDEW1kSJeEsMNbhOwgWd4vDHbm-pHlD6mHHlZ-0V2UnO2LXuWrrKIf2srT4h-tiegcFQn7DI9bLKgJeZvuNXYeONhtV3x2wR0oHh0Er0CaOmAETKlKQi3hKHBgedCGPeilnlaka3ogrUojO9PtA1GGVleY702sAEyNylttcF4AQBiAWG05KkWKAGLoAH6YT8-ASoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYoJbGqIP6lgNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJACjduYhhnl2ACgOYCwHICwGADAGiDAOQAQGqDQJJTsgNAeINEwjPw8aog_qWAxV1xoQAHYIjHwrqDRMIp5LHqIP6lgMVdcaEAB2CIx8K8A0CiA7___________8BuBPkA9gTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjYxNjg1NzY1MDVQBroXAjgBqhgXCQAAAADUDxNBEgo2MTY4NTc2NTA1GAGyGAkSArtQGC4iAQDQGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIjd7vqIP6lgMVdcaEAB2CIx8KEAEYASAAEgJQ8fD_BwE&num=1&cid=CAQShwIAQM4h3ISZq1vt27wmqyNckS6J6_uKNfdfdrK-1fuOYKEcB62SH0hp-Fo_gRiUcFKoiMEyFMpuRzHrl93aJucs8sd-MPJ-QjUx72Himple1A7vlilXDRpabNtCATT1j1GvZjqKBiRo1tRu97FcJ4br5_RYbFBXp09W5W6H0OVoNtkp3p8CforzQkEX1bIQPHF54Ew0yCjt6UKE4PvtNj4G8zckamd6_5PpAEPevgYyUpb19Yz6IdspN5qgGA-k0Rtlr1g972zCDV_yl91MDmQoWML1_-E9o2RRzkE5-5J1ARQaZeSBA1R0M7ENkXN7Yv9kPhXkRaclfNkFMTArUv0dd9IG9R3jvxgB&sig=AOD64_3YKWH5OIK92uGYBcnPws5Nk6CyNQ&client=ca-pub-4573231550355221&rf=4&nb=0&adurl=https://campaigns.hidglobal.com/identities%3Futm_source%3Dgdn%26utm_medium%3Dcpm%26utm_campaign%3Dhid_pacs_banners%26utm_content%3D26428_rotl%26gad_source%3D5%26gad_campaignid%3D23698123142%26gclid%3DEAIaIQobChMIjd7vqIP6lgMVdcaEAB2CIx8KEAEYASAAEgJQ8fD_BwE
            - generic [ref=f8e10]:
              - link [ref=f8e11] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CZTl77iyuao2vJfWMk7QPgsf8UP-vteCJAa2o9ZX4FbWQHxABIMb71nlg5ermg7wOoAHpzKuZKsgBCeACAKgDAcgDCqoE_gFP0N4JJ6OmYk24rK4PP9YaZRkgfV6K1ExbP7fHYZUCmBsdXaxM4RDFRdngduTzY4lwe92tuCoaczwK_O32JWiJj1a7YT0pPjql3mSETfcTZC-JN38pr1J_HPC1Brou659XLDjfJcorq_xaaYdNpGNOhhAY1Y5NoU7n_uNlQ755Pv3LuQXHrriRKDEW1kSJeEsMNbhOwgWd4vDHbm-pHlD6mHHlZ-0V2UnO2LXuWrrKIf2srT4h-tiegcFQn7DI9bLKgJeZvuNXYeONhtV3x2wR0oHh0Er0CaOmAETKlKQi3hKHBgedCGPeilnlaka3ogrUojO9PtA1GGVleY702sAEyNylttcF4AQBiAWG05KkWKAGLoAH6YT8-ASoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYoJbGqIP6lgNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJACjduYhhnl2ACgOYCwHICwGADAGiDAOQAQGqDQJJTsgNAeINEwjPw8aog_qWAxV1xoQAHYIjHwrqDRMIp5LHqIP6lgMVdcaEAB2CIx8K8A0CiA7___________8BuBPkA9gTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjYxNjg1NzY1MDVQBroXAjgBqhgXCQAAAADUDxNBEgo2MTY4NTc2NTA1GAGyGAkSArtQGC4iAQDQGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIjd7vqIP6lgMVdcaEAB2CIx8KEAEYASAAEgJQ8fD_BwE&num=1&cid=CAQShwIAQM4h3ISZq1vt27wmqyNckS6J6_uKNfdfdrK-1fuOYKEcB62SH0hp-Fo_gRiUcFKoiMEyFMpuRzHrl93aJucs8sd-MPJ-QjUx72Himple1A7vlilXDRpabNtCATT1j1GvZjqKBiRo1tRu97FcJ4br5_RYbFBXp09W5W6H0OVoNtkp3p8CforzQkEX1bIQPHF54Ew0yCjt6UKE4PvtNj4G8zckamd6_5PpAEPevgYyUpb19Yz6IdspN5qgGA-k0Rtlr1g972zCDV_yl91MDmQoWML1_-E9o2RRzkE5-5J1ARQaZeSBA1R0M7ENkXN7Yv9kPhXkRaclfNkFMTArUv0dd9IG9R3jvxgB&sig=AOD64_3YKWH5OIK92uGYBcnPws5Nk6CyNQ&client=ca-pub-4573231550355221&rf=4&nb=19&adurl=https://campaigns.hidglobal.com/identities%3Futm_source%3Dgdn%26utm_medium%3Dcpm%26utm_campaign%3Dhid_pacs_banners%26utm_content%3D26428_rotl%26gad_source%3D5%26gad_campaignid%3D23698123142%26gclid%3DEAIaIQobChMIjd7vqIP6lgMVdcaEAB2CIx8KEAEYASAAEgJQ8fD_BwE
              - link "HID" [ref=f8e14] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CZTl77iyuao2vJfWMk7QPgsf8UP-vteCJAa2o9ZX4FbWQHxABIMb71nlg5ermg7wOoAHpzKuZKsgBCeACAKgDAcgDCqoE_gFP0N4JJ6OmYk24rK4PP9YaZRkgfV6K1ExbP7fHYZUCmBsdXaxM4RDFRdngduTzY4lwe92tuCoaczwK_O32JWiJj1a7YT0pPjql3mSETfcTZC-JN38pr1J_HPC1Brou659XLDjfJcorq_xaaYdNpGNOhhAY1Y5NoU7n_uNlQ755Pv3LuQXHrriRKDEW1kSJeEsMNbhOwgWd4vDHbm-pHlD6mHHlZ-0V2UnO2LXuWrrKIf2srT4h-tiegcFQn7DI9bLKgJeZvuNXYeONhtV3x2wR0oHh0Er0CaOmAETKlKQi3hKHBgedCGPeilnlaka3ogrUojO9PtA1GGVleY702sAEyNylttcF4AQBiAWG05KkWKAGLoAH6YT8-ASoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYoJbGqIP6lgNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJACjduYhhnl2ACgOYCwHICwGADAGiDAOQAQGqDQJJTsgNAeINEwjPw8aog_qWAxV1xoQAHYIjHwrqDRMIp5LHqIP6lgMVdcaEAB2CIx8K8A0CiA7___________8BuBPkA9gTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjYxNjg1NzY1MDVQBroXAjgBqhgXCQAAAADUDxNBEgo2MTY4NTc2NTA1GAGyGAkSArtQGC4iAQDQGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIjd7vqIP6lgMVdcaEAB2CIx8KEAEYASAAEgJQ8fD_BwE&num=1&cid=CAQShwIAQM4h3ISZq1vt27wmqyNckS6J6_uKNfdfdrK-1fuOYKEcB62SH0hp-Fo_gRiUcFKoiMEyFMpuRzHrl93aJucs8sd-MPJ-QjUx72Himple1A7vlilXDRpabNtCATT1j1GvZjqKBiRo1tRu97FcJ4br5_RYbFBXp09W5W6H0OVoNtkp3p8CforzQkEX1bIQPHF54Ew0yCjt6UKE4PvtNj4G8zckamd6_5PpAEPevgYyUpb19Yz6IdspN5qgGA-k0Rtlr1g972zCDV_yl91MDmQoWML1_-E9o2RRzkE5-5J1ARQaZeSBA1R0M7ENkXN7Yv9kPhXkRaclfNkFMTArUv0dd9IG9R3jvxgB&sig=AOD64_3YKWH5OIK92uGYBcnPws5Nk6CyNQ&client=ca-pub-4573231550355221&rf=4&nb=1&adurl=https://campaigns.hidglobal.com/identities%3Futm_source%3Dgdn%26utm_medium%3Dcpm%26utm_campaign%3Dhid_pacs_banners%26utm_content%3D26428_rotl%26gad_source%3D5%26gad_campaignid%3D23698123142%26gclid%3DEAIaIQobChMIjd7vqIP6lgMVdcaEAB2CIx8KEAEYASAAEgJQ8fD_BwE
              - link "Open" [ref=f8e15] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CZTl77iyuao2vJfWMk7QPgsf8UP-vteCJAa2o9ZX4FbWQHxABIMb71nlg5ermg7wOoAHpzKuZKsgBCeACAKgDAcgDCqoE_gFP0N4JJ6OmYk24rK4PP9YaZRkgfV6K1ExbP7fHYZUCmBsdXaxM4RDFRdngduTzY4lwe92tuCoaczwK_O32JWiJj1a7YT0pPjql3mSETfcTZC-JN38pr1J_HPC1Brou659XLDjfJcorq_xaaYdNpGNOhhAY1Y5NoU7n_uNlQ755Pv3LuQXHrriRKDEW1kSJeEsMNbhOwgWd4vDHbm-pHlD6mHHlZ-0V2UnO2LXuWrrKIf2srT4h-tiegcFQn7DI9bLKgJeZvuNXYeONhtV3x2wR0oHh0Er0CaOmAETKlKQi3hKHBgedCGPeilnlaka3ogrUojO9PtA1GGVleY702sAEyNylttcF4AQBiAWG05KkWKAGLoAH6YT8-ASoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYoJbGqIP6lgNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJACjduYhhnl2ACgOYCwHICwGADAGiDAOQAQGqDQJJTsgNAeINEwjPw8aog_qWAxV1xoQAHYIjHwrqDRMIp5LHqIP6lgMVdcaEAB2CIx8K8A0CiA7___________8BuBPkA9gTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjYxNjg1NzY1MDVQBroXAjgBqhgXCQAAAADUDxNBEgo2MTY4NTc2NTA1GAGyGAkSArtQGC4iAQDQGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIjd7vqIP6lgMVdcaEAB2CIx8KEAEYASAAEgJQ8fD_BwE&num=1&cid=CAQShwIAQM4h3ISZq1vt27wmqyNckS6J6_uKNfdfdrK-1fuOYKEcB62SH0hp-Fo_gRiUcFKoiMEyFMpuRzHrl93aJucs8sd-MPJ-QjUx72Himple1A7vlilXDRpabNtCATT1j1GvZjqKBiRo1tRu97FcJ4br5_RYbFBXp09W5W6H0OVoNtkp3p8CforzQkEX1bIQPHF54Ew0yCjt6UKE4PvtNj4G8zckamd6_5PpAEPevgYyUpb19Yz6IdspN5qgGA-k0Rtlr1g972zCDV_yl91MDmQoWML1_-E9o2RRzkE5-5J1ARQaZeSBA1R0M7ENkXN7Yv9kPhXkRaclfNkFMTArUv0dd9IG9R3jvxgB&sig=AOD64_3YKWH5OIK92uGYBcnPws5Nk6CyNQ&client=ca-pub-4573231550355221&rf=4&nb=8&adurl=https://campaigns.hidglobal.com/identities%3Futm_source%3Dgdn%26utm_medium%3Dcpm%26utm_campaign%3Dhid_pacs_banners%26utm_content%3D26428_rotl%26gad_source%3D5%26gad_campaignid%3D23698123142%26gclid%3DEAIaIQobChMIjd7vqIP6lgMVdcaEAB2CIx8KEAEYASAAEgJQ8fD_BwE
          - generic [ref=f8e18]:
            - link [ref=f8e20] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=ARXetypzxaN2YKFtxoP2wWCzTsLWACKmdKc6bUlnzYTRjyUDcd7JnQfh22KQXFfxM2yQiaEJFpK45syxdlGh7lbQzBaNmKgrSHBSg4uVE7LCRw7faHEiGNZIdNQRlsMXxKauldhCaUQCVsvKcd_UVTtY7Geh0tIGzIVUWkSoqAXbneXVns1DT5_UW66vDGQQPc04zRxobE9fSLcSZ4TDIAgMFQAyMAITP2QxnSz0lhAwIJxdJ4lt4LGjb14R3jRv_rw0Cb_O25BtGWAW-VUYfsuhK3rHmO44CChvehDhHQkdC-QJbZa5fwUgGnzeUx0_uAfxi5ms5TAOnc8mpGgMt9HBsXGdrgsOz9yeOac7-vKBWu1mWijpmI67jrMN_Cr0obuJOWpjOtSCDQVcUOKykbXhsbayTCB4pg8ysLCO1WSwXlociBmUuj-GXtlraBeCuJs-ObTT1Y9z3ZzutK1C6v_VjfsCv_B2h3qpJcWs-vEe2Ldr3DeadGAaEDCOjXt5iigitzTgmy8xgPz3bLhMZgH44_hsBZ_EgDIDcRGCwofHSDahZCvenw7uRcB-ZcAvI1MzJosDiKm1P3QIEFO4dcs6bLviNJZbj1pIwHEAFdWL_eUUoeQKggn0JtYbM6XtUs15lihb0AKZxolUScM6udWSeEZNAaFXrd3nnxzYwJ59iiGOzGxxMTttXazyFKG9mosscdyb8FlDplJktykUbVlBvFycdrrQK5b7D6wkMoxOVbvbjbVuCOPu-k50QxOOVbL17e8_G0LWf5FLPhCq4OOA5sZxL79Ax0YnqkhgGJoLllsq69hJw2L7j3oyGVEeXoBFJoOJQP2djXI0wRb7xZtkz654ozFhNGRLUZxK4U82wYG_3uSx1RtUMvscBTn4DmD595TDaok0w6hhnLKaXTgkRAuBgk-IWbgtKm0noLcfwswQw0251UF8yuhrNKpnwlIkTB4T8Fvjbl30MzuHHr7GmwQwR6qp1-syPJGWlhYtcI98PULBO4NRrCog-QlnI27IiJvjD3VkiR4JwiX1yVYvhvgzRoelJ2UN6XFgqVLriy69ooYKfeteugaf7-IPmNHoaBXkF7tBaugRchDOGGrqIj7dUgKF-kQBdhMhM_f1JjceXjsMrwpMRAGYx-g9uBmxkrPqGBWr6fYa_U2GoXRqNzNFdBQ80Cy3XDE4f-gI5VTSkDzHVpaKrQaBf6m2krXAmVOebYLRw_SCsD6azXoS6FzD2KLm1WXl7-pGbQL6bJoY_g6PS6JNR64dX533xQ6l5U1UjDU6hnrS9aNV5vHd1a1PTkgAqU65UbezS1frB2B_psbjCcMJ3miabdmG136uoBdUubYr82yK4tlULWG5mk7PvLYsmWsbpEgq_z231OsvYYLECiXkHJV9kcV6Zni0FxIuVcq4FEjK1wiHsLDcDUbQPEqpdFgp0qUlYpRvFZ2Z60jL1JKNsQH0np9zdomEoUNZPC7L4tCdc-_nwsgqmLUY6yupIaMJa2m7HXHWbDFvbS_Nj4Az47z6yiVc6JNcOGm2XvRWFPwyrlnDVbkksRYehcLNCWplpTtVwLIOy1ShysohKUS2W0s5cXMxwgOMbrTnSX0kpV1KhOxs2v2II1KI0hQprZdF8FKwyacN8T__yu9D40y1Km2nVJGiS652sfHS1wVHeSlwGzoUwNjYUReSWvZSrcHrvWL8383gjIJ9WfMfH_aSVcWrh-Mh82Z-jhG8PNQql6AD37AWjEY0DYNXkZ8RQm2SgNJ1EZ-BLnJYaXydR2thR24_3XTU_p2_nOi0lbgGh-IIv32AQ5GwweHIf48CdtZSI15Vh9Xun_iwSJljcU_veCJT8uTxZTUD1ZyG1wZHpc3PBViIiam4xBxCb4ury_ESPt1RwnXexTQ9OLDjRGVAVuWbGUI32YTln5V2C9jP0umq_BIH7_zjvhfHX64eVTkSuJS2lDbfrb89eJYSNgzDfYplEwi3jrsEqriAit84VR8icj-q06NTAAbcgxpXTiGlzQoUUEztFac_CuMGJ2pp5C8EUjZk7sUtz3439IqgxEr9HUk-P5sjKh2uLmpgjgSdLfYPxBdmi4YSIwUSjXRpvmlPzKssAVve-F51E-0Q20iag0vMBnb2R3Tun11ZS4XxOlA-MmQnhVn7xxX0CJct4dhAA49htJCOMfco8WQUw9wVHXB35Cdlivu7LpNeod1uViIJTchKO33iPcS_3aaCIGpUfNBjaUoMcf8Qnv08Eezg4dgJKTPKCRMQm258wfhn5OP_5OEADGyi0fNFDXa-nhs7U2Oh5_NpWJC_0pjqhr8XaAW511BAYpqPITaEP58W-SdwSmJSiHm0omx0BQpr4vVieHGvFZprSphXD1K4X-k9onUCTjuUb5O3mtF_j94PKFZq4jKUcnS7cceU1iuecTQJfr4pjG2Z-gdheXUjozKt1xBVH7sMgBWvWm7YoTdSRS4gMDx-dDb1oJdb084Igz5HbGW9TywqbRvPK-8uAT5w6i-RA4r2i2hzjWVGzPg1Py0_3jrQmUVraJPfLUvi7s2PEQjHe5kD7-ifVQt7a089T8j_aI81EWlbUpFMiePSE-TaGeB23UPGKnZ7g44xw0saylfXXxZd2klRi-xTyqtXQQjPB1HxNXd1tf9e4WWh3GAMZznNuQZjDWfG6s2ZJ2RFvB9DwyA0nqzwlw9fTP2aXIDZZroqMEoPZBlNR5ncg-0VYSRYs6opHRCACzcKVHM4csYnP4VYz3Mojne6_z7MVex5m3TWk7aQ3yZTqlZOJM8EokRBV51m_JPfyPn7ShZoFXDd40ANq3h1W241q1_EqWT0xHvDoci-9yZGe-NwBJy0uNeVbj6IKs0uk4_9ZwVd3PcS4RoF9QdH0uf-perAvWkt3DXPwjQEpFljxiCrc6gXn0PaugJC6_sGuUA22k4XUAF2ZDcQt1pE3v2yvEJDN0Exj2p61OWgjDKW__x2oQwpdhg6_b90aczlVPWG4a-Vk9Er-fGsfBCKSUs50pAW7PI73-DPKP-19gyR0xfMXAsPE7kCb4CX6NsQJxb7eeeH1bp40Vm8a21YE6KgE3QxG4IqW9hG4hGwtbSNvOjnXxb_VMa9-BZPfmqLRQENC1nY-h4TKPZIaudy6tdWLg&opi=122715837
            - link [ref=f8e24] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=ARXetypzxaN2YKFtxoP2wWCzTsLWACKmdKc6bUlnzYTRjyUDcd7JnQfh22KQXFfxM2yQiaEJFpK45syxdlGh7lbQzBaNmKgrSHBSg4uVE7LCRw7faHEiGNZIdNQRlsMXxKauldhCaUQCVsvKcd_UVTtY7Geh0tIGzIVUWkSoqAXbneXVns1DT5_UW66vDGQQPc04zRxobE9fSLcSZ4TDIAgMFQAyMAITP2QxnSz0lhAwIJxdJ4lt4LGjb14R3jRv_rw0Cb_O25BtGWAW-VUYfsuhK3rHmO44CChvehDhHQkdC-QJbZa5fwUgGnzeUx0_uAfxi5ms5TAOnc8mpGgMt9HBsXGdrgsOz9yeOac7-vKBWu1mWijpmI67jrMN_Cr0obuJOWpjOtSCDQVcUOKykbXhsbayTCB4pg8ysLCO1WSwXlociBmUuj-GXtlraBeCuJs-ObTT1Y9z3ZzutK1C6v_VjfsCv_B2h3qpJcWs-vEe2Ldr3DeadGAaEDCOjXt5iigitzTgmy8xgPz3bLhMZgH44_hsBZ_EgDIDcRGCwofHSDahZCvenw7uRcB-ZcAvI1MzJosDiKm1P3QIEFO4dcs6bLviNJZbj1pIwHEAFdWL_eUUoeQKggn0JtYbM6XtUs15lihb0AKZxolUScM6udWSeEZNAaFXrd3nnxzYwJ59iiGOzGxxMTttXazyFKG9mosscdyb8FlDplJktykUbVlBvFycdrrQK5b7D6wkMoxOVbvbjbVuCOPu-k50QxOOVbL17e8_G0LWf5FLPhCq4OOA5sZxL79Ax0YnqkhgGJoLllsq69hJw2L7j3oyGVEeXoBFJoOJQP2djXI0wRb7xZtkz654ozFhNGRLUZxK4U82wYG_3uSx1RtUMvscBTn4DmD595TDaok0w6hhnLKaXTgkRAuBgk-IWbgtKm0noLcfwswQw0251UF8yuhrNKpnwlIkTB4T8Fvjbl30MzuHHr7GmwQwR6qp1-syPJGWlhYtcI98PULBO4NRrCog-QlnI27IiJvjD3VkiR4JwiX1yVYvhvgzRoelJ2UN6XFgqVLriy69ooYKfeteugaf7-IPmNHoaBXkF7tBaugRchDOGGrqIj7dUgKF-kQBdhMhM_f1JjceXjsMrwpMRAGYx-g9uBmxkrPqGBWr6fYa_U2GoXRqNzNFdBQ80Cy3XDE4f-gI5VTSkDzHVpaKrQaBf6m2krXAmVOebYLRw_SCsD6azXoS6FzD2KLm1WXl7-pGbQL6bJoY_g6PS6JNR64dX533xQ6l5U1UjDU6hnrS9aNV5vHd1a1PTkgAqU65UbezS1frB2B_psbjCcMJ3miabdmG136uoBdUubYr82yK4tlULWG5mk7PvLYsmWsbpEgq_z231OsvYYLECiXkHJV9kcV6Zni0FxIuVcq4FEjK1wiHsLDcDUbQPEqpdFgp0qUlYpRvFZ2Z60jL1JKNsQH0np9zdomEoUNZPC7L4tCdc-_nwsgqmLUY6yupIaMJa2m7HXHWbDFvbS_Nj4Az47z6yiVc6JNcOGm2XvRWFPwyrlnDVbkksRYehcLNCWplpTtVwLIOy1ShysohKUS2W0s5cXMxwgOMbrTnSX0kpV1KhOxs2v2II1KI0hQprZdF8FKwyacN8T__yu9D40y1Km2nVJGiS652sfHS1wVHeSlwGzoUwNjYUReSWvZSrcHrvWL8383gjIJ9WfMfH_aSVcWrh-Mh82Z-jhG8PNQql6AD37AWjEY0DYNXkZ8RQm2SgNJ1EZ-BLnJYaXydR2thR24_3XTU_p2_nOi0lbgGh-IIv32AQ5GwweHIf48CdtZSI15Vh9Xun_iwSJljcU_veCJT8uTxZTUD1ZyG1wZHpc3PBViIiam4xBxCb4ury_ESPt1RwnXexTQ9OLDjRGVAVuWbGUI32YTln5V2C9jP0umq_BIH7_zjvhfHX64eVTkSuJS2lDbfrb89eJYSNgzDfYplEwi3jrsEqriAit84VR8icj-q06NTAAbcgxpXTiGlzQoUUEztFac_CuMGJ2pp5C8EUjZk7sUtz3439IqgxEr9HUk-P5sjKh2uLmpgjgSdLfYPxBdmi4YSIwUSjXRpvmlPzKssAVve-F51E-0Q20iag0vMBnb2R3Tun11ZS4XxOlA-MmQnhVn7xxX0CJct4dhAA49htJCOMfco8WQUw9wVHXB35Cdlivu7LpNeod1uViIJTchKO33iPcS_3aaCIGpUfNBjaUoMcf8Qnv08Eezg4dgJKTPKCRMQm258wfhn5OP_5OEADGyi0fNFDXa-nhs7U2Oh5_NpWJC_0pjqhr8XaAW511BAYpqPITaEP58W-SdwSmJSiHm0omx0BQpr4vVieHGvFZprSphXD1K4X-k9onUCTjuUb5O3mtF_j94PKFZq4jKUcnS7cceU1iuecTQJfr4pjG2Z-gdheXUjozKt1xBVH7sMgBWvWm7YoTdSRS4gMDx-dDb1oJdb084Igz5HbGW9TywqbRvPK-8uAT5w6i-RA4r2i2hzjWVGzPg1Py0_3jrQmUVraJPfLUvi7s2PEQjHe5kD7-ifVQt7a089T8j_aI81EWlbUpFMiePSE-TaGeB23UPGKnZ7g44xw0saylfXXxZd2klRi-xTyqtXQQjPB1HxNXd1tf9e4WWh3GAMZznNuQZjDWfG6s2ZJ2RFvB9DwyA0nqzwlw9fTP2aXIDZZroqMEoPZBlNR5ncg-0VYSRYs6opHRCACzcKVHM4csYnP4VYz3Mojne6_z7MVex5m3TWk7aQ3yZTqlZOJM8EokRBV51m_JPfyPn7ShZoFXDd40ANq3h1W241q1_EqWT0xHvDoci-9yZGe-NwBJy0uNeVbj6IKs0uk4_9ZwVd3PcS4RoF9QdH0uf-perAvWkt3DXPwjQEpFljxiCrc6gXn0PaugJC6_sGuUA22k4XUAF2ZDcQt1pE3v2yvEJDN0Exj2p61OWgjDKW__x2oQwpdhg6_b90aczlVPWG4a-Vk9Er-fGsfBCKSUs50pAW7PI73-DPKP-19gyR0xfMXAsPE7kCb4CX6NsQJxb7eeeH1bp40Vm8a21YE6KgE3QxG4IqW9hG4hGwtbSNvOjnXxb_VMa9-BZPfmqLRQENC1nY-h4TKPZIaudy6tdWLg&opi=122715837
          - generic [aria-hidden] [ref=f8e27] [cursor=pointer]
          - generic [ref=f8e40]:
            - generic [ref=f8e41] [cursor=pointer]
            - generic [ref=f8e45]: Ads by
            - generic [ref=f8e50]:
              - generic [ref=f8e51]: Ad options
              - generic [ref=f8e54]: Send feedback
              - link [ref=f8e58] [cursor=pointer]:
                - /url: https://adssettings.google.com/whythisad?source=display&reasons=ARXetypzxaN2YKFtxoP2wWCzTsLWACKmdKc6bUlnzYTRjyUDcd7JnQfh22KQXFfxM2yQiaEJFpK45syxdlGh7lbQzBaNmKgrSHBSg4uVE7LCRw7faHEiGNZIdNQRlsMXxKauldhCaUQCVsvKcd_UVTtY7Geh0tIGzIVUWkSoqAXbneXVns1DT5_UW66vDGQQPc04zRxobE9fSLcSZ4TDIAgMFQAyMAITP2QxnSz0lhAwIJxdJ4lt4LGjb14R3jRv_rw0Cb_O25BtGWAW-VUYfsuhK3rHmO44CChvehDhHQkdC-QJbZa5fwUgGnzeUx0_uAfxi5ms5TAOnc8mpGgMt9HBsXGdrgsOz9yeOac7-vKBWu1mWijpmI67jrMN_Cr0obuJOWpjOtSCDQVcUOKykbXhsbayTCB4pg8ysLCO1WSwXlociBmUuj-GXtlraBeCuJs-ObTT1Y9z3ZzutK1C6v_VjfsCv_B2h3qpJcWs-vEe2Ldr3DeadGAaEDCOjXt5iigitzTgmy8xgPz3bLhMZgH44_hsBZ_EgDIDcRGCwofHSDahZCvenw7uRcB-ZcAvI1MzJosDiKm1P3QIEFO4dcs6bLviNJZbj1pIwHEAFdWL_eUUoeQKggn0JtYbM6XtUs15lihb0AKZxolUScM6udWSeEZNAaFXrd3nnxzYwJ59iiGOzGxxMTttXazyFKG9mosscdyb8FlDplJktykUbVlBvFycdrrQK5b7D6wkMoxOVbvbjbVuCOPu-k50QxOOVbL17e8_G0LWf5FLPhCq4OOA5sZxL79Ax0YnqkhgGJoLllsq69hJw2L7j3oyGVEeXoBFJoOJQP2djXI0wRb7xZtkz654ozFhNGRLUZxK4U82wYG_3uSx1RtUMvscBTn4DmD595TDaok0w6hhnLKaXTgkRAuBgk-IWbgtKm0noLcfwswQw0251UF8yuhrNKpnwlIkTB4T8Fvjbl30MzuHHr7GmwQwR6qp1-syPJGWlhYtcI98PULBO4NRrCog-QlnI27IiJvjD3VkiR4JwiX1yVYvhvgzRoelJ2UN6XFgqVLriy69ooYKfeteugaf7-IPmNHoaBXkF7tBaugRchDOGGrqIj7dUgKF-kQBdhMhM_f1JjceXjsMrwpMRAGYx-g9uBmxkrPqGBWr6fYa_U2GoXRqNzNFdBQ80Cy3XDE4f-gI5VTSkDzHVpaKrQaBf6m2krXAmVOebYLRw_SCsD6azXoS6FzD2KLm1WXl7-pGbQL6bJoY_g6PS6JNR64dX533xQ6l5U1UjDU6hnrS9aNV5vHd1a1PTkgAqU65UbezS1frB2B_psbjCcMJ3miabdmG136uoBdUubYr82yK4tlULWG5mk7PvLYsmWsbpEgq_z231OsvYYLECiXkHJV9kcV6Zni0FxIuVcq4FEjK1wiHsLDcDUbQPEqpdFgp0qUlYpRvFZ2Z60jL1JKNsQH0np9zdomEoUNZPC7L4tCdc-_nwsgqmLUY6yupIaMJa2m7HXHWbDFvbS_Nj4Az47z6yiVc6JNcOGm2XvRWFPwyrlnDVbkksRYehcLNCWplpTtVwLIOy1ShysohKUS2W0s5cXMxwgOMbrTnSX0kpV1KhOxs2v2II1KI0hQprZdF8FKwyacN8T__yu9D40y1Km2nVJGiS652sfHS1wVHeSlwGzoUwNjYUReSWvZSrcHrvWL8383gjIJ9WfMfH_aSVcWrh-Mh82Z-jhG8PNQql6AD37AWjEY0DYNXkZ8RQm2SgNJ1EZ-BLnJYaXydR2thR24_3XTU_p2_nOi0lbgGh-IIv32AQ5GwweHIf48CdtZSI15Vh9Xun_iwSJljcU_veCJT8uTxZTUD1ZyG1wZHpc3PBViIiam4xBxCb4ury_ESPt1RwnXexTQ9OLDjRGVAVuWbGUI32YTln5V2C9jP0umq_BIH7_zjvhfHX64eVTkSuJS2lDbfrb89eJYSNgzDfYplEwi3jrsEqriAit84VR8icj-q06NTAAbcgxpXTiGlzQoUUEztFac_CuMGJ2pp5C8EUjZk7sUtz3439IqgxEr9HUk-P5sjKh2uLmpgjgSdLfYPxBdmi4YSIwUSjXRpvmlPzKssAVve-F51E-0Q20iag0vMBnb2R3Tun11ZS4XxOlA-MmQnhVn7xxX0CJct4dhAA49htJCOMfco8WQUw9wVHXB35Cdlivu7LpNeod1uViIJTchKO33iPcS_3aaCIGpUfNBjaUoMcf8Qnv08Eezg4dgJKTPKCRMQm258wfhn5OP_5OEADGyi0fNFDXa-nhs7U2Oh5_NpWJC_0pjqhr8XaAW511BAYpqPITaEP58W-SdwSmJSiHm0omx0BQpr4vVieHGvFZprSphXD1K4X-k9onUCTjuUb5O3mtF_j94PKFZq4jKUcnS7cceU1iuecTQJfr4pjG2Z-gdheXUjozKt1xBVH7sMgBWvWm7YoTdSRS4gMDx-dDb1oJdb084Igz5HbGW9TywqbRvPK-8uAT5w6i-RA4r2i2hzjWVGzPg1Py0_3jrQmUVraJPfLUvi7s2PEQjHe5kD7-ifVQt7a089T8j_aI81EWlbUpFMiePSE-TaGeB23UPGKnZ7g44xw0saylfXXxZd2klRi-xTyqtXQQjPB1HxNXd1tf9e4WWh3GAMZznNuQZjDWfG6s2ZJ2RFvB9DwyA0nqzwlw9fTP2aXIDZZroqMEoPZBlNR5ncg-0VYSRYs6opHRCACzcKVHM4csYnP4VYz3Mojne6_z7MVex5m3TWk7aQ3yZTqlZOJM8EokRBV51m_JPfyPn7ShZoFXDd40ANq3h1W241q1_EqWT0xHvDoci-9yZGe-NwBJy0uNeVbj6IKs0uk4_9ZwVd3PcS4RoF9QdH0uf-perAvWkt3DXPwjQEpFljxiCrc6gXn0PaugJC6_sGuUA22k4XUAF2ZDcQt1pE3v2yvEJDN0Exj2p61OWgjDKW__x2oQwpdhg6_b90aczlVPWG4a-Vk9Er-fGsfBCKSUs50pAW7PI73-DPKP-19gyR0xfMXAsPE7kCb4CX6NsQJxb7eeeH1bp40Vm8a21YE6KgE3QxG4IqW9hG4hGwtbSNvOjnXxb_VMa9-BZPfmqLRQENC1nY-h4TKPZIaudy6tdWLg&opi=122715837
                - generic [ref=f8e59]: Why this ad?
          - generic [ref=f8e62]:
            - generic [ref=f8e63] [cursor=pointer]: Ad was inappropriate
            - generic [ref=f8e66] [cursor=pointer]: Not interested in this ad
            - generic [ref=f8e69] [cursor=pointer]: Ad covered content
            - generic [ref=f8e72] [cursor=pointer]: Seen this ad multiple times
          - generic [ref=f8e75]: Thanks. Feedback improves Google ads
          - generic [ref=f8e81]: Ad closed by
          - generic [ref=f8e94]:
            - generic [ref=f8e95] [cursor=pointer]
            - generic [ref=f8e99]:
              - generic [ref=f8e101]:
                - text: Personalize ads on this site
                - generic [ref=f8e103] [cursor=pointer]
              - link [ref=f8e105] [cursor=pointer]:
                - /url: https://support.google.com/ads/answer/10923348
                - generic [ref=f8e106]: Learn more
  - contentinfo [ref=e137]:
    - generic [ref=e138]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {logger} from './Logger.js';
  2  | 
  3  | export class Alert
  4  | {
  5  | 
  6  |     static async accept(page)
  7  |     {
> 8  |         await page.once('dialog', async dialog=>{
     |                    ^ TypeError: Cannot read properties of undefined (reading 'once')
  9  |             await dialog.accept();
  10 |         });
  11 |     }
  12 | 
  13 |     static async dismiss(page)
  14 |     {
  15 | 
  16 |         const [ dialog ] = page.waitForEvent('dialog');
  17 |         await dialog.dismiss();
  18 |     }
  19 | 
  20 |     static async enterValue(page,locator, value)
  21 |     {   
  22 |         cont [dialog] = await Promise.all([
  23 |             page.waitForEvent('dialog'),
  24 |             locator.click()
  25 |         ]);
  26 | 
  27 |         await dialog.accept(value);
  28 |     }
  29 | 
  30 |     static async message()
  31 |     {
  32 |         await page.once('dialog', async dialog=>{
  33 |             const message = await dialog.message();
  34 |             console.log(message);
  35 |         });
  36 |     }
  37 | }
```