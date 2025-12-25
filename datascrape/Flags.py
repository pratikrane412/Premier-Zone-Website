import os
import requests

# Your country codes (Alpha-3 mapped to the GitHub repo codes)
code_map = {
    "DEN":"dk","ITA":"it","ECU":"ec","GHA":"gh","TUN":"tn","FIN":"fi","GRE":"gr","NED":"nl","EST":"ee",
    "ALB":"al","GRN":"gd","ARG":"ar","CZE":"cz","ALG":"dz","BIH":"ba","NGA":"ng","SEN":"sn","IRQ":"iq",
    "URU":"uy","AUT":"at","EGY":"eg","ESP":"es","SUI":"ch","MLI":"ml","TUR":"tr","USA":"us","ZIM":"zw",
    "PAR":"py","COD":"cd","BRA":"br","ISR":"il","UKR":"ua","VEN":"ve","ENG":"eng","KOR":"kr","POR":"pt",
    "SCO":"sco","NZL":"nz","SRB":"rs","GUI":"gn","AUS":"au","CMR":"cm","MEX":"mx","SWE":"se","WAL":"wls",
    "MSR":"msr","NIR":"nir","SVK":"sk","BEL":"be","COL":"co","MNE":"me","LBR":"lr","CRO":"hr","MAR":"ma",
    "GER":"de","POL":"pl","IRN":"ir","NOR":"no","ZAM":"zm","FRA":"fr","JPN":"jp","JAM":"jm","GAB":"ga",
    "IRL":"ie","CIV":"ci"
}

# Output folder for SVG files
output_folder = "flags_svg"
os.makedirs(output_folder, exist_ok=True)

# GitHub base URL
base = "https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/"

# Download loop
for code, iso in code_map.items():
    url = f"{base}{iso.lower()}.svg"
    
    response = requests.get(url)
    
    if response.status_code == 200:
        with open(f"{output_folder}/{code}.svg", "wb") as f:
            f.write(response.content)
        print(f"✔️ Downloaded: {code}.svg")
    else:
        print(f"❌ Not Found: {code} ({url})")

print("\n🎉 DONE — All SVGs processed!")
print(f"📁 Saved in folder: {output_folder}/")
