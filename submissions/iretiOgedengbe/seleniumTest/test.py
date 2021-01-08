from selenium import webdriver  # imports the selenium webdriver


def test_get_title():
    PATH = "C:/Program Files (x86)/chromedriver.exe"  # the starting url
    driver = webdriver.Chrome(PATH)  # initialise a driver that is using the chrome driver for selenium
    driver.get("file:///C:/Users/tunde/Desktop/Dufuna-Fem/submissions/modupeAdeOnojobi/html/products.html")  # redirects the driver to that url path

    assert "" in driver.title 

    driver.find_element_by_link_text("Product Page").click() #test navigation links
    driver.find_element_by_link_text("Contact Us").click()
    driver.find_element_by_link_text("Sign Up").click()

    driver.close()  # closes the browser once it has completed

test_get_title()