# File Creation
try:
    with open("my_file.txt", "w") as file:
        file.write("This is line 1\n")
        file.write("12345\n")
        file.write("Another line with some text and numbers: 98765\n")
        print("File 'my_file.txt' created and written successfully.")
except PermissionError:
    print("Permission error occurred. Unable to create or write to the file.")
except Exception as e:
    print("An error occurred:", e)
finally:
    print("File creation process completed.\n")

# File Reading and Display
try:
    with open("my_file.txt", "r") as file:
        print("Contents of 'my_file.txt':")
        for line in file:
            print(line.strip())
except FileNotFoundError:
    print("File not found. Unable to read its contents.")
except Exception as e:
    print("An error occurred:", e)
finally:
    print("\nFile reading process completed.\n")

# File Appending
try:
    with open("my_file.txt", "a") as file:
        file.write("Appending line 1\n")
        file.write("Appending line 2\n")
        file.write("Appending line 3\n")
    print("Appended additional lines to 'my_file.txt' successfully.")
except PermissionError:
    print("Permission error occurred. Unable to append to the file.")
except Exception as e:
    print("An error occurred:", e)
finally:
    print("\nFile appending process completed.")
