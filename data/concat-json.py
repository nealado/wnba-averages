import json
import glob

read_files = glob.glob("*.json")
output_list = []

for f in read_files:
    with open(f, "rb") as infile:
        output_list.append(json.load(infile))

with open("merged_new_file.json", "wb") as outfile:
    json.dump(output_list, outfile)


# read_files = glob.glob("*.json")
# with open("merged_new_file.json", "wb") as outfile:
#     outfile.write('[{}]'.format(
#         'pid'.join([open(f, "rb").read() for f in read_files])))