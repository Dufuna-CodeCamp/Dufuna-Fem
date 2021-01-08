from selenium import webdriver 
from selenium.webdriver.common.keys import Keys
 # imports the selenium webdriver


def test_get_title():
    PATH = "C:/Program Files (x86)/chromedriver.exe"  # the starting url
    driver = webdriver.Chrome(PATH)  # initialise a driver that is using the chrome driver for selenium
    driver.get("file:///C:/Users/tunde/Desktop/Dufuna-CodeCamp20/submissions/cynthiaNwakaeme/HTML/index.html")  # redirects the driver to that url path

    assert "" in driver.title 

    driver.find_element_by_link_text("Product Page").click() #test navigation links
    driver.find_element_by_id("quantityNumber").send_keys("1")	
    driver.find_element_by_id("buyNow").click()
    driver.find_element_by_id("newsletter").send_keys("ire@mail")
    driver.find_element_by_id("requiredField").submit()
    driver.find_element_by_link_text("Contact Us").click()
    driver.find_element_by_id("fullName").send_keys("Arinola Badejo")
    driver.find_element_by_id("email").send_keys("remi@mail")
    driver.find_element_by_id("order_id").send_keys("56")
    driver.find_element_by_id("subject").send_keys("Customer")
    driver.find_element_by_id("description").send_keys("New Customer")
    driver.find_element_by_id("validateForm").submit()
    driver.find_element_by_link_text("Register").click()
    driver.find_element_by_id("firstName").send_keys("Arinola Badejo")
    driver.find_element_by_id("lastName").send_keys("remi@mail")
    driver.find_element_by_id("otherName").send_keys("56")
    driver.find_element_by_id("phoneNumber").send_keys("Customer")
    driver.find_element_by_id("email").send_keys("Customer")
    driver.find_element_by_id("password").send_keys("Customer")
    driver.find_element_by_id("confirmPassword").send_keys("Customer")
    driver.find_element_by_id("terms-conditions").click()
    driver.find_element_by_id("submit_form").submit()
    driver.close()  # closes the browser once it has completed

test_get_title()
