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
          - button "Click me" [ref=e123] [cursor=pointer]
        - generic [ref=e124]:
          - generic [ref=e125]: On button click, prompt box will appear
          - button "Click me" [ref=e127] [cursor=pointer]
      - iframe [ref=e131]:
        - generic [ref=f8e3]:
          - link [ref=f8e4] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=ChWSx2SyuavDWOsmj4t4PmMadsAL_r7XgiQGF7MbkuxW1kB8QASDG-9Z5YOXq5oO8DqAB6cyrmSrIAQLgAgCoAwHIAwiqBIICT9A_T_Px28rlzRwHCn_Y9qT6dS4H3ZfEzHBwJW482aZeo-N7Cejx4rXAfafNQ3FYNq4Erm-55A88x0R_E3yU_j5-PxDfLzjJkvMQfSJJqfh4fdK6sjjuriCtNeng7Lb5PCproatiI1ARjzd8tc1y5TbcG5aa6RIyYBAZh9EMeUVdbMqvIVvu918pVKAcv_Fh539WddZYQPoFdyP-d0Pc1TCeUTdaAHHbi_1UHetjWNgPxQofEpaEpTbMa9Zq-w_j-MmcXmxvGq61DOyu63EbQUywHZDBVRmNGZln-t5smuL2ShMwQhwmVTsS-Ll7VkSD7qP62FwYH8ym3l13u80ureRmwATI3KW21wXgBAGIBYbTkqRYoAYCgAfphPz4BKgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMgiAYRABGB0yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljq0fKeg_qWA2AB8ggbYWR4LXN1YnN5bi0zNTIwNjE3MzQxNjY1NTkysQkpS0xZpj-uVYAKA5gLAcgLAaIMA5ABAaoNAklOyA0B4g0TCMKP856D-pYDFcmR2AUdGGMHJuoNEwj-gfSeg_qWAxXJkdgFHRhjBybwDQKIDv___________wHYEwPQFQGYFgHKFgIKAPgWAYAXAbIXEBgBKgo2MTY4NTc2NTA1UAa6FwI4AaoYFwkAAAAAHJYYQRIKNjE2ODU3NjUwNRgBshgJEgK7UBgCIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIsKeDn4P6lgMVyZHYBR0YYwcmEAEYASAAEgIG4_D_BwE&num=1&cid=CAQShgIAQM4h3HdD398PponrCyzLiLExEDCyAkQT2ZhAz14RjnbguhKk0EFQNZNdml4h7ZUOEeW-0DdqqGv2CY7iw7pVKGmp0QQ_nzGT-EzXfqKG7vA5gImiVl6R2A08kEWvLsK-6GQZqTgjXnjtwgdFRtk-F8-FxUopnE7Imp-GYB3EPqItqk-XR4F4YYsM1KxsX-R8BFGQ-J6JcTUeeIr4kUOl4JdhB1QCi-uYOKKAIOYmhWABIdhqvbX8T0BIewbKqS3_c6Nz0kFYISkH4nNwxQQkUzNTmKrzqsx0tI8KGVpwuJv8mAGihDZgYcTuco2c_rZ0_GPW0S9wqNsSFoEWGIUfBsj_XSIaGAE&sig=AOD64_1ul8jsN82vj7s18wiXHvOn1J09rQ&client=ca-pub-4573231550355221&rf=5&nx=CLICK_X&ny=CLICK_Y&uap=UACH(platform)&uapv=UACH(platformVersion)&uaa=UACH(architecture)&uam=UACH(model)&uafv=UACH(uaFullVersion)&uab=UACH(bitness)&uaw=UACH(wow64)&uafvl=UACH(fullVersionList)&nb=2&adurl=https://blog.hidglobal.com/designing-access-systems-build-trust%3Futm_source%3Dgdn%26utm_medium%3Dcpm%26utm_campaign%3Dhid_pacs_singular%26utm_content%3D26428_rotl%26gad_source%3D5%26gad_campaignid%3D23698123142%26gclid%3DEAIaIQobChMIsKeDn4P6lgMVyZHYBR0YYwcmEAEYASAAEgIG4_D_BwE
          - generic [ref=f8e6]:
            - link [ref=f8e8] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=ARXetyrPHHLdgmZ7rAUBLv4PYlUV3IUH1wJ5lPGdatbT6wYbaD4_RPF0AMkrqq3GGwJdhmWqTJyv8JJ5K2KEZKmu-oUJk_nYeOAtaB94LB03C7qGV-z8Aa76zQargOK9YpLwltLmghPczqyfpDv6iL1O18IJWZkSV9K2q-6lyujedRp6i7qofffdzTg6BV8DMpJKKxKQzXaxOFLN7J2528SzM_n30tFcwbWtz9HhfHRx6-7tYYDIdimeg9823HdV42wfYNjDB_5tKyqOwOR1pF4VvpnFvxE44Iudup0Hd9yU0Dd2rjt5Y23-YM9MGsnwdS9Adr1i70n3jHSjyB1A0CKWP6jnYN6L6yrXFedPYI0sEs8wy6dBCKe8cIp6Lw54TJyoDw3lB3EzOurbc8NQzLVWKrWTNm6Ofidz8sRqD53CDfcqIdsVVWy8v6po2rdr1z1_RKU0jb6lvE-Bx-kCoLCu1RwwyDB8v18UbZziPSsHo1Xe_nK1x6IBwSb3Hd6xCNrv0qvGnHGNB4uDuTgglORGHCsFBl2QPnrjjw5RkbmEJj7NLPQ70kGuH2qmhkWvAbsUyNgxOMpsZKjxXLKjsCpWp1hBxfb1iOARAe2aWihr_sUYHP2VPlnWrlwAlLlRUUzmJjqGAzB296CZbN7c9HG0mOjeum5H5NGn3bK_0vbx_5AGm1IsvPs8zR8hgwmlKgIQBujMX0hHMKT_hzz4nYypfZh-8216xX4Y7D-HVqDe7nt5BoTyEGbT8iWmrFi0rBpCSPKZzuClnD2saR56Z8hVYOJuGUmKomLcqfJsZVbfv7TrA7eMu9dCDS0edXfdtqRigBcuePapI1zpziSgMpxliSb4dCSaAQwrxy_hNcOtu61GyT0HK3-qJptN3nSrY7nqq-3GqVc9PoVRKGdsad6d3Ziw_SNyx9SyDImyg5LkfJ-A8oKGNihLOyBzZ5ql8SJPZppkrCm4Z0HcqGvcpeNzmloEr15A3SddAfPQ79Z_vlCyXS_crej_aG96NTzwqE2C8ElUMXCci8GYLclFmiEPWMIS14VKKvK82r2PC_BnSGLUYqMQxU85ndkzXlCkI9dHc2AioAW9BVhsrEO8BPXjwqhfQNSsEDwdLU8QcF7LyFsYFQbvJJbRHwpY_TZW0jpvn21IzO-jHCVF_lnC75RuuvPi5NA2JNwus7YQfEnGL2Fkhyii6GkOrfKYX_x6TWIeO8Ni60pUPu2g6np3UjaPf5_GGovsh8fOV8u4-azQjasEaobqAjI9gD7dnqOuM9QdvG9IcXHuaC2a16OMJFWTygZ1nyWZc2fPrwme8SMt52HX113EoS8Ej-ZmuvxiM_80nsugx9_CCIdD29Cv7DFCZ0vNJDzWqk_Q_pTymJmDTFkrbzi_13qSS7lQ_RUzgHtBUkGssHwbFeXmvUII7Er07Ziak53KPO7MMXH_Ek3V9HqPDy34OEOZlqTqXmdQ9aYzUolh1oTkoTv1di7670yqoD5PPBcUmNzI3QWvqxhlTKhgtqaw5nOnVWkUSui5ubHAmI4vqyU-AFi7wPLhGrQ4H7T7Q5vouRDoaW9udAmZism2ESd4Q2_MEti-ZqA-TN2j5Icf6-FOXG5_r0M66da2vhQ8pbBYDDWVQS_tOCHnTok8J6922ZRPxdu_ojrMgfKbFR7-aZ0RM6-82Xop48C4G8fenL1g86dES4VBcwf7nyKePePbwJxK00-kb66YJR5tPVdpbtLZe8AZu3RixaVLkC9hjHa0hTblgt8pZJkO_K26mA6U2BWDEwifghkXx25mLtgka8IZy5DiuQmCgZkWv3K2VeYS16Py6PZDyHfiZFP4wQOfzYo_uO970beFMAqUs4yaR0VQe76OFRA3r_jAXSFhff_AStFqI54kjeDvgYFdF-f0z91BnhNYSVejj20DHP3eREIYIP2fqWFUwbE_kiOV3CqZo2aCCmyLDUpxc2kU5d8_JuDb46SYrjWNBOuC53uEzoU6rCCSYPWTy0O0gYzcAOnj4PpHa3DQzqBwuCrP3C_aytb36ANewAE4jDP2toJjKLEhdkCnc273uJEyuJIJScgE2QifgbG7TeWI0XBXAfDPzyt8RALHbVI-wi8DLYiZSXSm4HLebR1R08InP36nC77tki3LBoFjWnngK9A1F0qAOgZIfULSNy6kGSP4eoxGCt1W4WjjfMWy6smVG2yOTrpBvdbRGtSdCW5e75KdAzRuFuct5FkXc590MX497RrmwTgP-Zw744q1LegOdcst-QtLr3Q7cKiagNF1ztbLyZUdRlisENULLHO_VGTiUgMYfTS6jSdKAFVU_F0qPNzdyz4x4aLFujxq7iXO5fHVsmH7QwqvBKQg0KmV7OAEOSyiRZ0w02Rae0Q2WyStLx-yqBQuAHfoaTI0veg50bT2hT8ukgu1eWacUrVgKhNqdWmzQ6pZDpSqQGV0oOz8V69sZ4tVcuMSUck87eyHt-aHdV9PtAtreKuslU4p80Fju9u1JQhgjaL5FxpErUZD8NOPUTZsViwEvnx5esgdqevj2dxWmk4ynXaWU6Nyiy1BI6RmpqQhsYt8OoWJgZ_lw5_TRR1Nt_XVK46qbhMwcsybvC8-72CrjEICm4tQnV04aI9--CnpJ0W3VcyHodoqG4AoIM7AWd_wWZP4jqTMjpjeW5LVBgABkeHom8dE01sdDhY0wPzMmhTmcA2oP2iv9yQnCJe8XtFLGUroTYQHmByw0dKdmtM1L8WVeV0Lk_7pZnc5pGRacu9FtgUQMO4blgnVL_aw46ipbQa6e8Ehc7sdC8VBeX3sY8fqXzR5FYyfDPU97pVyi5l2it1lEhgN8NdLVoUnZKzLWf14AV6z77Io5HBAFMS_a0PW1KhYyUKx-0UUPFJcpmu_WX37z3OOp43FZni-tU_eYdo_UETijuJS7U73K1XVCxlYowyrEDW5Mdp-dCgbblYbBLhw0UwtieIp6HtMFAtGMjMJx77U4UbRGSjqgi3O_wMMd6jlfw9soKnR9yvTb592kA0tBTbvHU8L65hUesX-9Xevy2fOtQb9jq50UUsWNVM6_sivdCmO72I02pK5&opi=122715837
            - link [ref=f8e12] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=ARXetyrPHHLdgmZ7rAUBLv4PYlUV3IUH1wJ5lPGdatbT6wYbaD4_RPF0AMkrqq3GGwJdhmWqTJyv8JJ5K2KEZKmu-oUJk_nYeOAtaB94LB03C7qGV-z8Aa76zQargOK9YpLwltLmghPczqyfpDv6iL1O18IJWZkSV9K2q-6lyujedRp6i7qofffdzTg6BV8DMpJKKxKQzXaxOFLN7J2528SzM_n30tFcwbWtz9HhfHRx6-7tYYDIdimeg9823HdV42wfYNjDB_5tKyqOwOR1pF4VvpnFvxE44Iudup0Hd9yU0Dd2rjt5Y23-YM9MGsnwdS9Adr1i70n3jHSjyB1A0CKWP6jnYN6L6yrXFedPYI0sEs8wy6dBCKe8cIp6Lw54TJyoDw3lB3EzOurbc8NQzLVWKrWTNm6Ofidz8sRqD53CDfcqIdsVVWy8v6po2rdr1z1_RKU0jb6lvE-Bx-kCoLCu1RwwyDB8v18UbZziPSsHo1Xe_nK1x6IBwSb3Hd6xCNrv0qvGnHGNB4uDuTgglORGHCsFBl2QPnrjjw5RkbmEJj7NLPQ70kGuH2qmhkWvAbsUyNgxOMpsZKjxXLKjsCpWp1hBxfb1iOARAe2aWihr_sUYHP2VPlnWrlwAlLlRUUzmJjqGAzB296CZbN7c9HG0mOjeum5H5NGn3bK_0vbx_5AGm1IsvPs8zR8hgwmlKgIQBujMX0hHMKT_hzz4nYypfZh-8216xX4Y7D-HVqDe7nt5BoTyEGbT8iWmrFi0rBpCSPKZzuClnD2saR56Z8hVYOJuGUmKomLcqfJsZVbfv7TrA7eMu9dCDS0edXfdtqRigBcuePapI1zpziSgMpxliSb4dCSaAQwrxy_hNcOtu61GyT0HK3-qJptN3nSrY7nqq-3GqVc9PoVRKGdsad6d3Ziw_SNyx9SyDImyg5LkfJ-A8oKGNihLOyBzZ5ql8SJPZppkrCm4Z0HcqGvcpeNzmloEr15A3SddAfPQ79Z_vlCyXS_crej_aG96NTzwqE2C8ElUMXCci8GYLclFmiEPWMIS14VKKvK82r2PC_BnSGLUYqMQxU85ndkzXlCkI9dHc2AioAW9BVhsrEO8BPXjwqhfQNSsEDwdLU8QcF7LyFsYFQbvJJbRHwpY_TZW0jpvn21IzO-jHCVF_lnC75RuuvPi5NA2JNwus7YQfEnGL2Fkhyii6GkOrfKYX_x6TWIeO8Ni60pUPu2g6np3UjaPf5_GGovsh8fOV8u4-azQjasEaobqAjI9gD7dnqOuM9QdvG9IcXHuaC2a16OMJFWTygZ1nyWZc2fPrwme8SMt52HX113EoS8Ej-ZmuvxiM_80nsugx9_CCIdD29Cv7DFCZ0vNJDzWqk_Q_pTymJmDTFkrbzi_13qSS7lQ_RUzgHtBUkGssHwbFeXmvUII7Er07Ziak53KPO7MMXH_Ek3V9HqPDy34OEOZlqTqXmdQ9aYzUolh1oTkoTv1di7670yqoD5PPBcUmNzI3QWvqxhlTKhgtqaw5nOnVWkUSui5ubHAmI4vqyU-AFi7wPLhGrQ4H7T7Q5vouRDoaW9udAmZism2ESd4Q2_MEti-ZqA-TN2j5Icf6-FOXG5_r0M66da2vhQ8pbBYDDWVQS_tOCHnTok8J6922ZRPxdu_ojrMgfKbFR7-aZ0RM6-82Xop48C4G8fenL1g86dES4VBcwf7nyKePePbwJxK00-kb66YJR5tPVdpbtLZe8AZu3RixaVLkC9hjHa0hTblgt8pZJkO_K26mA6U2BWDEwifghkXx25mLtgka8IZy5DiuQmCgZkWv3K2VeYS16Py6PZDyHfiZFP4wQOfzYo_uO970beFMAqUs4yaR0VQe76OFRA3r_jAXSFhff_AStFqI54kjeDvgYFdF-f0z91BnhNYSVejj20DHP3eREIYIP2fqWFUwbE_kiOV3CqZo2aCCmyLDUpxc2kU5d8_JuDb46SYrjWNBOuC53uEzoU6rCCSYPWTy0O0gYzcAOnj4PpHa3DQzqBwuCrP3C_aytb36ANewAE4jDP2toJjKLEhdkCnc273uJEyuJIJScgE2QifgbG7TeWI0XBXAfDPzyt8RALHbVI-wi8DLYiZSXSm4HLebR1R08InP36nC77tki3LBoFjWnngK9A1F0qAOgZIfULSNy6kGSP4eoxGCt1W4WjjfMWy6smVG2yOTrpBvdbRGtSdCW5e75KdAzRuFuct5FkXc590MX497RrmwTgP-Zw744q1LegOdcst-QtLr3Q7cKiagNF1ztbLyZUdRlisENULLHO_VGTiUgMYfTS6jSdKAFVU_F0qPNzdyz4x4aLFujxq7iXO5fHVsmH7QwqvBKQg0KmV7OAEOSyiRZ0w02Rae0Q2WyStLx-yqBQuAHfoaTI0veg50bT2hT8ukgu1eWacUrVgKhNqdWmzQ6pZDpSqQGV0oOz8V69sZ4tVcuMSUck87eyHt-aHdV9PtAtreKuslU4p80Fju9u1JQhgjaL5FxpErUZD8NOPUTZsViwEvnx5esgdqevj2dxWmk4ynXaWU6Nyiy1BI6RmpqQhsYt8OoWJgZ_lw5_TRR1Nt_XVK46qbhMwcsybvC8-72CrjEICm4tQnV04aI9--CnpJ0W3VcyHodoqG4AoIM7AWd_wWZP4jqTMjpjeW5LVBgABkeHom8dE01sdDhY0wPzMmhTmcA2oP2iv9yQnCJe8XtFLGUroTYQHmByw0dKdmtM1L8WVeV0Lk_7pZnc5pGRacu9FtgUQMO4blgnVL_aw46ipbQa6e8Ehc7sdC8VBeX3sY8fqXzR5FYyfDPU97pVyi5l2it1lEhgN8NdLVoUnZKzLWf14AV6z77Io5HBAFMS_a0PW1KhYyUKx-0UUPFJcpmu_WX37z3OOp43FZni-tU_eYdo_UETijuJS7U73K1XVCxlYowyrEDW5Mdp-dCgbblYbBLhw0UwtieIp6HtMFAtGMjMJx77U4UbRGSjqgi3O_wMMd6jlfw9soKnR9yvTb592kA0tBTbvHU8L65hUesX-9Xevy2fOtQb9jq50UUsWNVM6_sivdCmO72I02pK5&opi=122715837
          - generic [aria-hidden] [ref=f8e15] [cursor=pointer]
          - generic [ref=f8e28]:
            - generic [ref=f8e29] [cursor=pointer]
            - generic [ref=f8e33]: Ads by
            - generic [ref=f8e38]:
              - generic [ref=f8e39]: Ad options
              - generic [ref=f8e42]: Send feedback
              - link [ref=f8e46] [cursor=pointer]:
                - /url: https://adssettings.google.com/whythisad?source=display&reasons=ARXetyrPHHLdgmZ7rAUBLv4PYlUV3IUH1wJ5lPGdatbT6wYbaD4_RPF0AMkrqq3GGwJdhmWqTJyv8JJ5K2KEZKmu-oUJk_nYeOAtaB94LB03C7qGV-z8Aa76zQargOK9YpLwltLmghPczqyfpDv6iL1O18IJWZkSV9K2q-6lyujedRp6i7qofffdzTg6BV8DMpJKKxKQzXaxOFLN7J2528SzM_n30tFcwbWtz9HhfHRx6-7tYYDIdimeg9823HdV42wfYNjDB_5tKyqOwOR1pF4VvpnFvxE44Iudup0Hd9yU0Dd2rjt5Y23-YM9MGsnwdS9Adr1i70n3jHSjyB1A0CKWP6jnYN6L6yrXFedPYI0sEs8wy6dBCKe8cIp6Lw54TJyoDw3lB3EzOurbc8NQzLVWKrWTNm6Ofidz8sRqD53CDfcqIdsVVWy8v6po2rdr1z1_RKU0jb6lvE-Bx-kCoLCu1RwwyDB8v18UbZziPSsHo1Xe_nK1x6IBwSb3Hd6xCNrv0qvGnHGNB4uDuTgglORGHCsFBl2QPnrjjw5RkbmEJj7NLPQ70kGuH2qmhkWvAbsUyNgxOMpsZKjxXLKjsCpWp1hBxfb1iOARAe2aWihr_sUYHP2VPlnWrlwAlLlRUUzmJjqGAzB296CZbN7c9HG0mOjeum5H5NGn3bK_0vbx_5AGm1IsvPs8zR8hgwmlKgIQBujMX0hHMKT_hzz4nYypfZh-8216xX4Y7D-HVqDe7nt5BoTyEGbT8iWmrFi0rBpCSPKZzuClnD2saR56Z8hVYOJuGUmKomLcqfJsZVbfv7TrA7eMu9dCDS0edXfdtqRigBcuePapI1zpziSgMpxliSb4dCSaAQwrxy_hNcOtu61GyT0HK3-qJptN3nSrY7nqq-3GqVc9PoVRKGdsad6d3Ziw_SNyx9SyDImyg5LkfJ-A8oKGNihLOyBzZ5ql8SJPZppkrCm4Z0HcqGvcpeNzmloEr15A3SddAfPQ79Z_vlCyXS_crej_aG96NTzwqE2C8ElUMXCci8GYLclFmiEPWMIS14VKKvK82r2PC_BnSGLUYqMQxU85ndkzXlCkI9dHc2AioAW9BVhsrEO8BPXjwqhfQNSsEDwdLU8QcF7LyFsYFQbvJJbRHwpY_TZW0jpvn21IzO-jHCVF_lnC75RuuvPi5NA2JNwus7YQfEnGL2Fkhyii6GkOrfKYX_x6TWIeO8Ni60pUPu2g6np3UjaPf5_GGovsh8fOV8u4-azQjasEaobqAjI9gD7dnqOuM9QdvG9IcXHuaC2a16OMJFWTygZ1nyWZc2fPrwme8SMt52HX113EoS8Ej-ZmuvxiM_80nsugx9_CCIdD29Cv7DFCZ0vNJDzWqk_Q_pTymJmDTFkrbzi_13qSS7lQ_RUzgHtBUkGssHwbFeXmvUII7Er07Ziak53KPO7MMXH_Ek3V9HqPDy34OEOZlqTqXmdQ9aYzUolh1oTkoTv1di7670yqoD5PPBcUmNzI3QWvqxhlTKhgtqaw5nOnVWkUSui5ubHAmI4vqyU-AFi7wPLhGrQ4H7T7Q5vouRDoaW9udAmZism2ESd4Q2_MEti-ZqA-TN2j5Icf6-FOXG5_r0M66da2vhQ8pbBYDDWVQS_tOCHnTok8J6922ZRPxdu_ojrMgfKbFR7-aZ0RM6-82Xop48C4G8fenL1g86dES4VBcwf7nyKePePbwJxK00-kb66YJR5tPVdpbtLZe8AZu3RixaVLkC9hjHa0hTblgt8pZJkO_K26mA6U2BWDEwifghkXx25mLtgka8IZy5DiuQmCgZkWv3K2VeYS16Py6PZDyHfiZFP4wQOfzYo_uO970beFMAqUs4yaR0VQe76OFRA3r_jAXSFhff_AStFqI54kjeDvgYFdF-f0z91BnhNYSVejj20DHP3eREIYIP2fqWFUwbE_kiOV3CqZo2aCCmyLDUpxc2kU5d8_JuDb46SYrjWNBOuC53uEzoU6rCCSYPWTy0O0gYzcAOnj4PpHa3DQzqBwuCrP3C_aytb36ANewAE4jDP2toJjKLEhdkCnc273uJEyuJIJScgE2QifgbG7TeWI0XBXAfDPzyt8RALHbVI-wi8DLYiZSXSm4HLebR1R08InP36nC77tki3LBoFjWnngK9A1F0qAOgZIfULSNy6kGSP4eoxGCt1W4WjjfMWy6smVG2yOTrpBvdbRGtSdCW5e75KdAzRuFuct5FkXc590MX497RrmwTgP-Zw744q1LegOdcst-QtLr3Q7cKiagNF1ztbLyZUdRlisENULLHO_VGTiUgMYfTS6jSdKAFVU_F0qPNzdyz4x4aLFujxq7iXO5fHVsmH7QwqvBKQg0KmV7OAEOSyiRZ0w02Rae0Q2WyStLx-yqBQuAHfoaTI0veg50bT2hT8ukgu1eWacUrVgKhNqdWmzQ6pZDpSqQGV0oOz8V69sZ4tVcuMSUck87eyHt-aHdV9PtAtreKuslU4p80Fju9u1JQhgjaL5FxpErUZD8NOPUTZsViwEvnx5esgdqevj2dxWmk4ynXaWU6Nyiy1BI6RmpqQhsYt8OoWJgZ_lw5_TRR1Nt_XVK46qbhMwcsybvC8-72CrjEICm4tQnV04aI9--CnpJ0W3VcyHodoqG4AoIM7AWd_wWZP4jqTMjpjeW5LVBgABkeHom8dE01sdDhY0wPzMmhTmcA2oP2iv9yQnCJe8XtFLGUroTYQHmByw0dKdmtM1L8WVeV0Lk_7pZnc5pGRacu9FtgUQMO4blgnVL_aw46ipbQa6e8Ehc7sdC8VBeX3sY8fqXzR5FYyfDPU97pVyi5l2it1lEhgN8NdLVoUnZKzLWf14AV6z77Io5HBAFMS_a0PW1KhYyUKx-0UUPFJcpmu_WX37z3OOp43FZni-tU_eYdo_UETijuJS7U73K1XVCxlYowyrEDW5Mdp-dCgbblYbBLhw0UwtieIp6HtMFAtGMjMJx77U4UbRGSjqgi3O_wMMd6jlfw9soKnR9yvTb592kA0tBTbvHU8L65hUesX-9Xevy2fOtQb9jq50UUsWNVM6_sivdCmO72I02pK5&opi=122715837
                - generic [ref=f8e47]: Why this ad?
          - generic [ref=f8e50]:
            - generic [ref=f8e51] [cursor=pointer]: Ad covered content
            - generic [ref=f8e54] [cursor=pointer]: Seen this ad multiple times
            - generic [ref=f8e57] [cursor=pointer]: Ad was inappropriate
            - generic [ref=f8e60] [cursor=pointer]: Not interested in this ad
          - generic [ref=f8e63]: Thanks. Feedback improves Google ads
          - generic [ref=f8e69]: Ad closed by
          - generic [ref=f8e82]:
            - generic [ref=f8e83] [cursor=pointer]
            - generic [ref=f8e87]:
              - generic [ref=f8e89]:
                - text: Personalize ads on this site
                - generic [ref=f8e91] [cursor=pointer]
              - link [ref=f8e93] [cursor=pointer]:
                - /url: https://support.google.com/ads/answer/10923348
                - generic [ref=f8e94]: Learn more
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