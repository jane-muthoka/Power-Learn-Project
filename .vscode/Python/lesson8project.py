#In this project, you are tasked to create a program that automates searching for a word definition in a dictionary. Follow the instructions to implement
import json
from difflib import get_close_matches

def load_dictionary(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

def get_definition(dictionary, word):
    word = word.lower()
    if word in dictionary:
        return dictionary[word]
    elif word.title() in dictionary:
        return dictionary[word.title()]
    elif word.upper() in dictionary:
        return dictionary[word.upper()]
    else:
        close_matches = get_close_matches(word, dictionary.keys())
        if close_matches:
            suggestion = close_matches[0]
            confirm = input(f"Did you mean '{suggestion}' instead? Enter 'Y' for yes, 'N' for no: ").lower()
            if confirm == 'y':
                return dictionary[suggestion]
        return "Word not found in the dictionary."

# Load the dictionary data
dictionary_data = load_dictionary('.vscode\Python\dictionary-data\data.json')
#.vscode\Python\dictionary-data\data.json

# Prompt the user for input
word = input("Enter a word to get its definition: ")

# Get the definition of the word
definition = get_definition(dictionary_data, word)

# Print the definition
print(definition)
